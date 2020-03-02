import {GET_USERS} from "../type";

export const users = (state = {}, action) => {
    const {type, payload} = action;
    switch (type) {
        case GET_USERS:
            return payload;
        default:
            return state;
    }
};