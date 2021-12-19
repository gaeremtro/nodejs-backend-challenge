import { NextFunction, Request, Response } from "express";


const Movie = require('../schemas/movieSchema');

function movieController() {

    async function addMovieToList(req: Request, res: Response, next: NextFunction) {

        
    }       

    
    async function deleteMovieFromList(req: Request, res: Response, next: NextFunction) {

        
    }  
   

    return { addMovieToList, deleteMovieFromList };
}

export default movieController;
