const { Server } = require("socket.io");
const cookie = require("cookie");
const jwt = require("jsonwebtoken");
const userModel = require("../models/user.model");
const aiService = require("../services/ai.service");
const messageModel = require("../models/message.model");
const { createMemory, queryMemory } = require("../services/vector.service");

function initSocketserver(httpServer) {
  const io = new Server(httpServer, {});

  io.use(async (socket, next) => {
    const cookies = cookie.parse(socket.handshake.headers?.cookie || "");

    if (!cookies.token) {
      return next(new Error("Authentication error: No token provided"));
    }

    try {
      const decoded = jwt.verify(cookies.token, process.env.JWT_SECRET);

      const user = await userModel.findById(decoded.id);

      socket.user = user;

      next();
    } catch (error) {
      return next(new Error("Authentication error: No token provided"));
    }
  });

  io.on("connection", (socket) => {
    console.log("User Connected:", socket.id);

    socket.on("ai-message", async (messagePayload) => {
      
      const message = await messageModel.create({
          chat:messagePayload.chat,
          user:socket.user._id,
          content:messagePayload.content,
          role:"user"
      })

      const vectors = await aiService.generateVector(messagePayload.content);

      
        await createMemory({
          vectors,
          messageId: message._id,
          metadata: {
            chat: messagePayload.chat,
            user: socket.user._id,
            text:messagePayload.content
          },
        });
      
      const memory = await queryMemory({
        queryVector: vectors,
        limit: 3,
        metadata:{}
      })

      console.log(memory)

        //stm-->shot term memory.
      const chatHistory = (
        await messageModel
          .find({
            chat: messagePayload.chat,
          })
          .sort({ createdAt: -1 })
          .limit(20)
          .lean()
      ).reverse();

      const stm = chatHistory.map((item) => {
          return {
            role: item.role,
            parts: [{ text: item.content }],
          };
        })

        const ltm = [
          {
            role:'user',
            parts:[{
              text:`
              these are soe previous messages from the chat , use them to genrate a responce
              ${memory.map(item => item.metadata.text).join("\n")}
            `}]
          }
        ]
        
        console.log([...ltm,...stm]);
      const responce = await aiService.generateResponse([...ltm,...stm]);
      // console.log(responce);

      const responceMessage = await messageModel.create({
        chat: messagePayload.chat,
        user: socket.user._id,
        content: responce,
        role: "model",
      });

      const responceVector = await aiService.generateVector(responce);

      await createMemory({
          vectors: responceVector,
          messageId: responceMessage._id,
          metadata: {
            chat: messagePayload.chat,
            user: socket.user._id,
            text:responce
          },
        });
      
      socket.emit("ai-response", {
        content: responce,
        chat: messagePayload.content,
      });
    });
  });
}

module.exports = initSocketserver;
