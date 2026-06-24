require("dotenv").config();
const app = require("./src/app")
const connectDb = require("./src/db/db");
const initSocketserver = require('./src/sockets/socket.server')
const httpServer = require('http').createServer(app);

connectDb();
initSocketserver(httpServer);

httpServer.listen(3000,()=>{
    console.log("Server is ruuning at port 3000");
})