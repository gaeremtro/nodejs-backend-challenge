import { Schema, model } from "mongoose";
import { UserType } from "../types/userType";

export const userSchema = new Schema<UserType>({
    name: {
        type: String,
    },
    password:{
        type: String,
    },
    lists: [{ type: Schema.Types.ObjectId, ref: 'lists' }]
    
});

module.exports = model('users', userSchema);
