import { createStore, combineReducers, applyMiddleware, compose } from 'redux';
import thunk from "redux-thunk";

import {name, users} from "./reducers";

const reducers = combineReducers({
    name,
    users
});

const composeEnhancers = typeof window === "object" && window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ ? window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__({}): compose;

const enhancer = composeEnhancers(applyMiddleware(thunk));

export const store = createStore(reducers, enhancer);