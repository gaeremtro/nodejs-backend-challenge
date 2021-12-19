
import { ObjectId } from "mongoose";

export interface UserInterface  {
    name:string;
    password:string;
    lists:Array<ObjectId>;
}