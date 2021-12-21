import movieController from "../controllers/movieController";
import authController  from '../controllers/authController';

const express = require("express");

const router = express.Router();

const {deleteAllMoviesFromList, addMovie} = require('../methods/movie')


router.post('/addmovietolist',  authController, movieController().addMovieToList, addMovie);

router.delete('/removemoviesfromlist', authController, movieController().deleteMovieFromList, deleteAllMoviesFromList)


module.exports = {routes:router}