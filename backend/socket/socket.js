import { Server } from "socket.io";
import http from 'http';
import express from 'express';

const app = express();
const server = http.createServer(app);
const io = new Server(server, {
    cors: {
        origin: ['https://my-chat-stuff.netlify.app'],
        methods: ['GET', 'POST'],
        credentials: true
    }
})

export const getReceiverSocketId = (receiverId) => {
	return userSocketMap[receiverId];
};

const userSocketMap={} //key-value pair {userId:socketId} stores the connected users i.e., online users

io.on('connection', (socket) => { //socket is user
    // console.log("user connected", socket.id);
 
    const userId=socket.handshake.query.userId; //received userId sent from frontend, ref to SocketContext.jsx in frontend
    if(userId!="undefined") userSocketMap[userId]=socket.id;
    //io.emit send keys of userSocketMap i.e., userId to frontend
    io.emit("getOnlineUser",Object.keys(userSocketMap));

    socket.on("disconnect", () => {
        // console.log("user disconnected", socket.id);
        delete userSocketMap[userId];
        io.emit("getOnlineUser",Object.keys(userSocketMap));
    })
})

export { app, io, server }