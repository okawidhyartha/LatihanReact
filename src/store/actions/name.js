import {UPDATE_NAME} from "../type";

export const updateName = name => ({
    type: UPDATE_NAME,
    payload: name
});