import { Schema } from "mongoose";

import { ListType } from "../types/listType";

export const listSchema = new Schema<ListType>({
    movies: Array
});