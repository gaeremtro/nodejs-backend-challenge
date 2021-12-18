import { Schema, model } from "mongoose";
import { UserType } from "../interfaces/userInterface";

export const userSchema = new Schema<UserType>({
    name: {
        type: String,
    },
    password:{
        type: String,
    },
    lists: [{ type: Schema.Types.ObjectId, ref: 'lists' }]
    
});

const user = model('users', userSchema);

module.exports = user;
