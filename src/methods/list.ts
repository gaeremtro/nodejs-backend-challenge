"use strict";

import { Request, Response } from "express";


const User = require("../schemas/userSchema");

const List = require("../schemas/listSchema");

async function addList(req: Request, res: Response) {
    let data = req.body.name;
    let userId = req.body.userId;

    let query = {_id:userId}
    let newListData = {name: data};

    let newList = new List(newListData);
    
    try{
        let result  = await newList.save();
        
        if (result && result._id){
            await User.findOneAndUpdate(query, {$push: { lists:result._id}});
            res.status(201).send('new item added succesfully').end()
        }else{
            res.status(500).send({
                text:'the list item was created but it cannot be added to the user',
                 result,
                 userId});
        }

    }catch (error){
        res.status(502).send({ text: "dbError", error: error });
    }
}



module.exports = { addList };
