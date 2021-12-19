"use strict";
import { NextFunction, Request, Response } from 'express';
import { model, Model } from 'mongoose';
import { UserInterface } from './src/interfaces/userInterface';
import { userSchema } from './src/schemas/userSchema';

const express = require("express");
const cors = require("cors");
const app = express();
const mongoose = require('mongoose');

//config and env variables
const config = require("./config.ts");
const PORT = config.PORT; // 8000

mongoose.connect('mongodb://localhost:27017/test').
catch ((error:any):void => {
    console.log('some think', error);
})

//initual middlewares
app.use(cors());
app.use(express.json());
app.use(
    express.urlencoded({
        extended: true,
    })
);




const User = require('./src/schemas/userSchema');
app.get( "/", ( req:Request, res:Response ):void =>{
    let query = { _id:'61bf406c5a8417cfb5dbfe9e'}
    
     User.find(query, (result:Array<UserInterface>,err:any) => err? res.json(err): res.json(result));
     
    })
app.listen( PORT, () => {

    console.log(`⚡️[server]: Server is running at https://localhost:${PORT}`);
});
