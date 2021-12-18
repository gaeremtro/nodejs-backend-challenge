"use strict";
import { NextFunction, Request, Response } from 'express';
const express = require("express");
const cors = require("cors");
const app = express();

//config and env variables
const config = require("./config.ts");
const PORT = config.PORT; // 8000

//initual middlewares
app.use(cors());
app.use(express.json());
app.use(
    express.urlencoded({
        extended: true,
    })
);





app.get( "/", ( req:Request, res:Response ):void =>{ res.send( "Express + TypeScript Server" );})
app.listen( PORT, () => {
    console.log(`⚡️[server]: Server is running at https://localhost:${PORT}`);
});
