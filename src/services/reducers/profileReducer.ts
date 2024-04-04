import rootState, { InitialState } from "../initialState";
import { Action } from "redux";
import {GET_USER_FAILURE, GET_USER_SUCCESS, UPDATE_USER_FAILURE, UPDATE_USER_SUCCESS} from "../types/actions";

interface UserAction extends Action {
    payload: any;
}

const userReducer = (state = rootState.user, action: UserAction): InitialState["user"] => {
    switch (action.type) {
        case GET_USER_SUCCESS:
            return {
                ...state,
                data: action.payload,
                loading: false,
                error: null
            };
        case GET_USER_FAILURE:
            return {
                ...state,
                loading: false,
                error: action.payload
            };
        case UPDATE_USER_SUCCESS:
            return {
                ...state,
                data: action.payload,
                loading: false,
                error: null
            };
        case UPDATE_USER_FAILURE:
            return {
                ...state,
                loading: false,
                error: action.payload
            };
        default:
            return state;
    }
};

export default userReducer;