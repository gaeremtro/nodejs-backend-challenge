import { NextFunction, Request, Response } from "express";

const User = require("../schemas/userSchema");

export default async function authController(req: Request, res: Response, next: NextFunction) {
    
    if (
        req.body &&
        (req.body.name || req.query.name) &&
        (req.body.password || req.query.password)
    ) {
        let userName = req.body.name ?? req.query.name;
        let userPassword = req.body.password ?? req.query.password;

        let query = { name: userName };

        try {
            let result = await User.findOne(query);
            if (result._id) {
                if (result.password === userPassword) {
                    req.body.user_id = result._id;
                    next();
                } else
                    res.status(401)
                        .send({
                            text: "Contraseña incorrecta",
                            error: "auth/invalid-password",
                        })
                        .end();
            } else {
                res.status(401)
                    .send({
                        text: "El usuario no existe",
                        error: "auth/user-not-found",
                    })
                    .end();
            }
        } catch (error) {
            res.status(502).send({ text: "auth/dbError", error });
        }
    } else {
        res.status(400)
            .send({
                text: "Doesnt respect the correct structure, must have a name and password",
                error: "bad-formated-request",
            })
    }
}