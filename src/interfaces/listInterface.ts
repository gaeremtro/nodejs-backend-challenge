import { ObjectId } from "mongoose";


export interface ListInterface  {
    _id:string;
    name:string;
    movies:Array<ObjectId>
}