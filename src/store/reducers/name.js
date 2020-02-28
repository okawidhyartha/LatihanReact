import {UPDATE_NAME} from "../type";

export const name = (state = "Oka", action) => {
    const {type, payload} = action;
    switch (type) {
        case UPDATE_NAME:
            return payload;
        default:
            return state;
    }
};