import { NextFunction, Request, Response } from "express";
import { ObjectId } from "mongoose";

const List = require("../schemas/listSchema");
const User = require("../schemas/userSchema");

function listController() {

    async function addList(req: Request, res: Response, next: NextFunction) {
        if (req.body && req.body.name && req.body.userId) {
            let { userId } = req.body;
            //it colud be a unique name list too...
            try {
                let result = await User.findById(userId);
                console.log(result);
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
            res.status(400).send({
                text: "Doesnt respect the correct structure, must have a name and password",
                error: "bad-formated-request",
            });
        }
    }

    async function getAllLists(
        req: Request,
        res: Response,
        next: NextFunction
    ) {
        if (req.query.name && req.query.password && req.body.user_id) {
            next();
        } else {
            res.status(400)
                .send({
                    text: "Doesnt respect the correct structure, must have a name and password",
                    error: "bad-formated-request",
                })
                .end();
        }
    }

    async function getList(req: Request, res: Response, next: NextFunction) {
        if (
            req.query.listId &&
            req.query.name &&
            req.query.password &&
            req.body.user_id
        ) {
            let listId = req.query.listId;
            let userId = req.body.user_id;

            try {
                let result = await User.findById(userId);
                let isListOwner = result.lists.some(
                    (element: ObjectId) => element.toString() === listId
                );

                if (isListOwner) next();
                else
                    res.status(404).send({
                        text: "This list doesnt exist or doesnt belong to this user.",
                        error: "List-not-found",
                    });
            } catch (error) {
                res.status(502).send({ text: "getList/dbError", error });
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

    return { addList, getAllLists, getList };
}

export default listController;
