// const dotenv=require('dotenv');
// const express=require('express');
import express from 'express';
import dotenv from 'dotenv';
import mongoose from 'mongoose';
import cookieParser from 'cookie-parser';
import authRoutes from './routes/authRoutes.js';
import messageRoutes from './routes/messageRoutes.js';
import userRoutes from './routes/userRoutes.js';
import cors from 'cors';
import { app, server } from './socket/socket.js';

dotenv.config();


const corsOptions = {
    origin: 'http://localhost:8081', // Replace with your frontend URL
    credentials: true, // Allow credentials (cookies, authorization headers, TLS client certificates)
    
  };

app.use(cors(corsOptions));
app.use(express.json()); // to parse the incoming requests with JSON payloads (from req.body)
app.use(cookieParser());


app.use("/api/auth",authRoutes);
app.use("/api/message",messageRoutes);
app.use("/api/users",userRoutes);

// app.get('/',(req,res)=>res.send('Hello from express'));

mongoose.connect(process.env.MONGO_URI)
.then(()=>{
    server.listen(process.env.PORT,()=>{
        console.log("backend is up and running");
    });
})
.catch((e)=>{
    console.log(e);
})
