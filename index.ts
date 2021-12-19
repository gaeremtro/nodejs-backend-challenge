"use strict";
import { Request, Response } from 'express';

import { UserInterface } from './src/interfaces/userInterface';

const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost:27017/node-back-db').
catch ((error:any):void => {
    console.log('some think', error);
})

const express = require("express");
const cors = require("cors");
const app = express();

const User = require('./src/schemas/userSchema');

//config and env variables
const config = require("./config.ts");
const PORT = config.PORT; // 8000


const  userRouter = require ('./src/router/userRoutes');




//initual middlewares
app.use(cors());
app.use(express.json());
app.use(
    express.urlencoded({
        extended: true,
    })
);

app.use('/u', userRouter.routes);


app.get( "/", ( req:Request, res:Response ):void =>{
    let query = {}
    
     User.find(query, (result:UserInterface,err:any) => err? res.json(err): res.json(result._id));
     
    })
app.listen( PORT, () => {

    console.log(`⚡️[server]: Server is running at https://localhost:${PORT}`);
});
