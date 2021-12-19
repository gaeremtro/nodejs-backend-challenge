import { Schema, model } from "mongoose";
import { UserInterface } from "../interfaces/userInterface";

export const userSchema = new Schema<UserInterface>({
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
