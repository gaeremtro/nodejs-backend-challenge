import { Schema } from "mongoose";
import { UserType } from "../types/userType";

export const movieSchema = new Schema<UserType>({
    name: {
        type: String,
    },
    password: String,
    lists: Array,
});