"use strict";

import { Request, Response } from "express";


const User = require("../schemas/userSchema");

async function register(req: Request, res: Response) {
    let userData = {
        name: req.body.name,
        password: req.body.password,
    };

    let newUser = new User(userData);

    try {
        let result = await newUser.save();
        res.status(201)
            .send({ text: "user created Succesfully", data: result })
            .end();
    } catch (error) {
        res.status(502).send({ text: "dbError", error: error });
    }
}



module.exports = { register };
