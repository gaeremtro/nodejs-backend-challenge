import { Schema } from "mongoose";
import { MovieType } from "../types/movieType";

export const movieSchema = new Schema<MovieType>({
    director: {
        type: String,
    },
    title: {
        type: String,
        required: true,
        unique: true,
    },
});
