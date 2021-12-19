import { Schema, model } from "mongoose";
import { MovieInterface } from "../interfaces/movieInferface";

export const movieSchema = new Schema<MovieInterface>({
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