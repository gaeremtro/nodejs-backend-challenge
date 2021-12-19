import { NextFunction, Request, Response } from "express";

const User = require("../schemas/userSchema");

async function authController(req: Request, res: Response, next: NextFunction) {
    
    if (req.body && req.body.name && req.body.password) {
        let userName = req.body.name;
        let userPassword = req.body.password;

        let query = { name: userName };

        try {
            let result = await User.findOne(query);
            if (result.length > 0) {
                if (result.password === userPassword) next();
                else
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
            res.status(502).send({text:'auth/dbError', error})
        }
    } else {
        res.status(400)
            .send({
                text: "Doesnt respect the correct structure, must have a name and password",
                error: "bad-formated-request",
            })
            .end();
    }
}

export default authController;
