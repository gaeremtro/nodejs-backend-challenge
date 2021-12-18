import { Schema, model } from "mongoose";
import { MovieType } from "../interfaces/movieInferface";

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


module.exports = model('movies', movieSchema);