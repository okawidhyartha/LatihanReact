import {GET_USERS} from "../type";

//request ke reducer

export const getUsersAction = user => ({
    type: GET_USERS,
    payload: user
});
