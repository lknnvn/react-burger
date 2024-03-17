// src/services/reducers/userAuthReducer.ts
import {
    SIGN_IN_SUCCESS,
    SIGN_IN_FAILURE,
    SIGN_UP_SUCCESS,
    SIGN_UP_FAILURE,
    CLEAR_ERROR,
    SIGN_OUT_FAILURE,
    SIGN_OUT_SUCCESS,
    FORGOT_PASSWORD_FAILURE,
    FORGOT_PASSWORD_SUCCESS,
    RESET_PASSWORD_SUCCESS,
    RESET_PASSWORD_FAILURE
} from '../actions/types';
import {Action} from "redux";
import rootState, {InitialState} from "../initialState";

interface AuthAction extends Action {
    payload: any;
}

const authReducer = (state = rootState.auth, action: AuthAction): InitialState["auth"] => {
    switch (action.type) {
        case SIGN_IN_SUCCESS:
            localStorage.setItem('isAuthenticated', 'true');
            return {
                ...state,
                data: action.payload,
                error: null,
            };
        case SIGN_IN_FAILURE:
            return {
                ...state,
                data: action.payload,
                error: action.payload
            };
        case SIGN_OUT_SUCCESS:
            localStorage.removeItem('isAuthenticated');
            return {
                ...state,
                data: null,
                isForgotPasswordVisited: false,
                error: null,
            };
        case SIGN_OUT_FAILURE:
            return {
                ...state,
                error: action.payload,
            };
        case SIGN_UP_SUCCESS:
            localStorage.setItem('isAuthenticated', 'true');
            return {
                ...state,
                data: action.payload,
                error: null,
            };
        case SIGN_UP_FAILURE:
            return {
                ...state,
                data: action.payload,
                error: action.payload
            };
        case FORGOT_PASSWORD_SUCCESS:
            return {
                ...state,
                isForgotPasswordVisited: true,
                error: null,
            };
        case FORGOT_PASSWORD_FAILURE:
            return {
                ...state,
                error: action.payload
            };
        case RESET_PASSWORD_SUCCESS:
            return {
                ...state,
                error: null,
            };
        case RESET_PASSWORD_FAILURE:
            return {
                ...state,
                error: action.payload,
            };
        case CLEAR_ERROR:
            return {
                ...state,
                error: null,
            };
        default:
            return state;
    }
};

export default authReducer;