"use strict";
import { NextFunction, Request, Response } from 'express';
import { model, Model } from 'mongoose';

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
     let query = { };
     User.find(query, (res:any,err:any) => console.log(res ?? err));
     
    res.send('gg')
    })
app.listen( PORT, () => {

    console.log(`⚡️[server]: Server is running at https://localhost:${PORT}`);
});
