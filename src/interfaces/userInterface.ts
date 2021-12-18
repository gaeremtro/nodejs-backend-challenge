
import { ObjectId } from "mongoose";

export interface UserType  {
    name:string;
    password:string;
    lists:Array<ObjectId>;
}