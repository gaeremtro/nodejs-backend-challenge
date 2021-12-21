import { NextFunction, Request, Response } from "express";

import { UserInterface } from "../interfaces/userInterface";

const User = require('../schemas/userSchema');

function userController() {

    async function register(req: Request, res: Response, next: NextFunction) {

        if (req.body && req.body.name && req.body.password){
            req.body.name = req.body.name.trim();
            let newName = req.body.name
            let query = {name:newName}

            if (req.body.password.length < 8 || req.body.name.length < 1){
                res.status(403).send('Please a safer password, min 8 characters. The name cannot be empty');
            }else {
                try{
                    let result = await User.find(query);
                    if (result.length > 0)
                        res.status(409).send({text: 'This name already exists', error:'username-already-in-use'})
                    else
                        next();
                }catch (errore:any){
                    res.status(502).send({text:'register/dbError', error: errore})
                }
            }
        }else {
            res.status(400)
                .send({
                    text:'Doesnt respect the correct structure, must have a name and password', 
                    error:'bad-formated-request'
                })
                .end()
        }
    }       

    return { register };
}

export default userController;
