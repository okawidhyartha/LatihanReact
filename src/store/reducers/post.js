import {GET_POSTS} from "../type";

export const posts = (state = {}, action) => {
    const {type, payload} = action;
    switch (type) {
        case GET_POSTS:
            return payload;
        default:
            return state;
    }
};