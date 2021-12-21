import { NextFunction, Request, Response } from "express";

import { ObjectId } from "mongoose";

const List = require("../schemas/listSchema");
const Movie = require('../schemas/movieSchema');
const User = require("../schemas/userSchema")

function movieController() {


    //Refactornig the code to find if the given list is the given user owner.
    
    async function isUsersOwner(user_id:ObjectId, list_id:string):Promise<boolean> {

        let result = await User.findById(user_id);
        let isListOwner = result.lists.some(
            (element: ObjectId) => element.toString() === list_id)
        return isListOwner;

    }



    async function addMovieToList(req: Request, res: Response, next: NextFunction) {
        if (req.body && req.body.title && req.body.director && req.body.user_id && req.body.listId) {

            let { user_id, listId } = req.body;
            try {

                if (await isUsersOwner(user_id,listId)) {
                    next();
                }
                else
                    res.status(404).send({
                        text: "This list doesnt exist or doesnt belong to this user.",
                        error: "List-not-found",
                    });
            } catch (error) {
                res.status(502).send({ text: "addMovieToList/dbError", error });
            }
        } else {
            res.status(400).send({
                text: "Doesnt respect the correct structure, must have a director, title and listId",
                error: "bad-formated-request",
            });
        }
        
    }       
    
    async function deleteMovieFromList(req: Request, res: Response, next: NextFunction) {

        if (req.body && req.body.user_id && req.body.listId) {


            let { user_id, listId } = req.body;

            try {
                if (await isUsersOwner(user_id,listId)) {
                    next();
                }
                else
                    res.status(404).send({
                        text: "This list doesnt exist or doesnt belong to this user.",
                        error: "List-not-found",
                    });
            } catch (error) {
                res.status(502).send({ text: "deleteMovieFromList/dbError", error });
            }
        } else {
            res.status(400).send({
                text: "Doesnt respect the correct structure, must have a listId",
                error: "bad-formated-request",
            });
        }
            
    }
        
    

    return { addMovieToList, deleteMovieFromList };
}

export default movieController;
