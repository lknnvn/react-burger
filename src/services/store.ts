// src/services/store.ts
import {createStore, applyMiddleware} from 'redux';
import rootReducer from './reducers/rootReducer';
import thunk from "redux-thunk";
import {socketMiddleware} from "./middleware";
import {
    WS_CONNECTION_CLOSED,
    WS_CONNECTION_ERROR,
    WS_CONNECTION_START,
    WS_CONNECTION_SUCCESS, WS_GET_MESSAGE,
} from "./types/wsActions";

const store = createStore(
    rootReducer,
    applyMiddleware(thunk, socketMiddleware({
            WS_CONNECTION_START,
            WS_CONNECTION_SUCCESS,
            WS_CONNECTION_ERROR,
            WS_CONNECTION_CLOSED,
            WS_GET_MESSAGE
        }
    ))
);

export default store;