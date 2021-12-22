import { Schema, model } from "mongoose";
import { MovieInterface } from "../interfaces/movieInferface";

export const movieSchema = new Schema<MovieInterface>({
    director: {
        type: String,
        required: true,
    },
    title: {
        type: String,
        required: true,
    },
});


module.exports = model('movies', movieSchema);