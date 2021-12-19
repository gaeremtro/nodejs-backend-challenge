import { Schema, model } from "mongoose";

import { ListInterface } from "../interfaces/listInterface";

export const listSchema = new Schema<ListInterface>({
    name: String,
    movies: [{ type: Schema.Types.ObjectId, ref: 'movies' }],
});

module.exports = model('lists', listSchema);