import { Schema, model } from "mongoose";

import { ListType } from "../interfaces/listInterface";

export const listSchema = new Schema<ListType>({
    movies: [{ type: Schema.Types.ObjectId, ref: 'movies' }],
});

module.exports = model('lists', listSchema);