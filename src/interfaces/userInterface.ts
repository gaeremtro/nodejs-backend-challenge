
import { ObjectId } from "mongoose";

export interface UserInterface  {
    _id?:string;
    name:string;
    password:string;
    lists:Array<ObjectId>;
}