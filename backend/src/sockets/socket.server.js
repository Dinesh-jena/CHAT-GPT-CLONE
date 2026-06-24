const { Server } = require("socket.io");

function initSocketserver(httpServer){
    
    const io = new Server(httpServer,{});

    io.on("connection", (socket) => {
        console.log("New soket connection:",socket.id)
    });
}


module.exports= initSocketserver;
