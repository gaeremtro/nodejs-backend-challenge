

import { ListType } from './listType';
export type UserType = {
    name:string;
    password:string;
    lists:Array<ListType>;
}