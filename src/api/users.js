import {getData} from "../helpers/fetch";

const {REACT_APP_API_USERS} = process.env;

function getUsers() {
    return getData(REACT_APP_API_USERS).then(res => res);
}

export {getUsers};