import {InitialState} from "../initialState";
import rootState from "../initialState";
import {
    WS_CONNECTION_CLOSED,
    WS_CONNECTION_ERROR,
    WS_CONNECTION_SUCCESS,
    WS_GET_MESSAGE,
    WSActionTypes
} from "../types/actions";

const wsReducer = (state = rootState.ws, action: WSActionTypes): InitialState["ws"] => {
    let CLEAR_WS_MESSAGES;
    switch (action.type) {
        case WS_CONNECTION_SUCCESS:
            return {
                ...state,
                connected: true
            };
        case WS_CONNECTION_ERROR:
            return {
                ...state,
                connected: false,
                error: action.payload
            };
        case WS_CONNECTION_CLOSED:
            return {
                ...state,
                connected: false
            };
        case WS_GET_MESSAGE:
            return {
                ...state,
                messages: action.payload //[...state.messages, action.payload]
            };
        default:
            return state;
    }
};

export default wsReducer;