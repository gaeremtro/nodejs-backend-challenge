"use strict";

import { Request, Response } from "express";

const User = require("../schemas/userSchema");

const List = require("../schemas/listSchema");


const Movie = require("../schemas/movieSchema");

async function addList(req: Request, res: Response) {
    let data = req.body.name;
    let userId = req.body.userId;

    let query = { _id: userId };
    let newListData = { name: data };

    let newList = new List(newListData);

    try {
        let result = await newList.save();

        if (result && result._id) {
            await User.findOneAndUpdate(query, {
                $push: { lists: result._id },
            });
            res.status(201).send("new item added succesfully");
        } else {
            res.status(500).send({
                text: "the list item was created but it cannot be added to the user",
                result,
                userId,
            });
        }
    } catch (error) {
        res.status(502).send({ text: "dbError", error: error });
    }
}

async function getList(req: Request, res: Response) {
    let listId = req.query.listId;

    let query = { _id: listId };

    try {
        let result = await List.findOne(query).populate('movies');

        res.status(200).send(result);
    } catch (error) {
        res.status(502).send({ text: "dbError", error: error });
    }
}

async function getAllLists(req: Request, res: Response) {
    let userId = req.body.user_id;
    let query = { _id: userId };

    try {
        let result = await User.findOne(query).populate('lists');
        await result.populate('lists.movies')
        res.status(200).send(result.lists);
    } catch (error) {
        res.status(502).send({ text: "dbError", error: error });
    }
}

module.exports = { addList, getList, getAllLists };
