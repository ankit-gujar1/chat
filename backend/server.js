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

dotenv.config();
const app=express();

app.use(express.json()); // to parse the incoming requests with JSON payloads (from req.body)
app.use(cookieParser());

app.use(cors());

app.use("/api/auth",authRoutes);
app.use("/api/message",messageRoutes);
app.use("/api/users",userRoutes);

// app.get('/',(req,res)=>res.send('Hello from express'));

mongoose.connect(process.env.MONGO_URI)
.then(()=>{
    app.listen(process.env.PORT,()=>{
        console.log("backend is up and running");
    });
})
.catch((e)=>{
    console.log(e);
})
