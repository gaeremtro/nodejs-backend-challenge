"use strict";

import { Request, Response } from "express";

const List = require("../schemas/listSchema");

const Movie = require("../schemas/movieSchema");

async function addMovie(req: Request, res: Response) {

    let { title, director, listId } = req.body;

    let newDataMovie = { title, director };
    let newMovie = new Movie(newDataMovie);

    let query = {_id: listId}

    try {
        let result = await newMovie.save();

        if (result && result._id) {
            await List.findOneAndUpdate(query, {
                $push: { movies: result._id },
            });
            res.status(201).send("new item added succesfully");
        } else {
            res.status(500).send({
                text: "the movie was created but it cannot be added to the user List",
                result
            });
        }
    } catch (error) {
        res.status(502).send({ text: "dbError", error: error });
    }
}

async function deleteAllMoviesFromList(req: Request, res: Response) {
    let {listId} = req.body;

    let query = { _id: listId };

    try {
        let result = await List.findOneAndUpdate(query, {$set: { movies: [] }});
        let deletedCount = await Movie.deleteMany( { _id: { $in: result.movies } } );

        res.status(200).send({result,deletedCount});
    } catch (error) {
        res.status(502).send({ text: "dbError", error: error } );
    }
}


module.exports = { addMovie, deleteAllMoviesFromList };
