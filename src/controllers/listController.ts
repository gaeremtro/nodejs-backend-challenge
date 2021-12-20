import { NextFunction, Request, Response } from "express";

const List = require("../schemas/listSchema");
const User = require("../schemas/userSchema");

function listController() {
    async function addList(req: Request, res: Response, next: NextFunction) {
        if (req.body && req.body.name && req.body.userId) {
            let { userId } = req.body;
            let query = { _id: userId };
            //it colud be a unique name list too...
            try {
                let result = await User.findOne(query);
                console.log(result)
                if (!result) {
                    res.status(404).send({
                        text: "There is no user with such id",
                        error: "user-not-found",
                    });
                } else {
                    next();
                }
            } catch (error) {
                res.status(502).send({ text: "dbError", error });
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

    async function getAllLists(
        req: Request,
        res: Response,
        next: NextFunction
    ) {}

    async function getList(req: Request, res: Response, next: NextFunction) {}

    return { addList, getAllLists, getList };
}

export default listController;
