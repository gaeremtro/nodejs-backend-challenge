import { NextFunction, Request, Response } from "express";


const List = require('../schemas/listSchema');

function listController() {

    async function addList(req: Request, res: Response, next: NextFunction) {

        
    }       

    
    async function getAllLists(req: Request, res: Response, next: NextFunction) {

        
    }       

    async function getList(req: Request, res: Response, next: NextFunction) {

        
    }
   

    return { addList, getAllLists, getList };
}

export default listController;
