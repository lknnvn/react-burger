import rootState, {InitialState} from "../initialState";
import {REFRESH_TOKEN_FAILURE, REFRESH_TOKEN_SUCCESS,} from "../actions/types";
import {Action} from "redux";

interface TokenAction extends Action {
    payload: any;
}

const tokenReducer = (state = rootState.token, action: TokenAction): InitialState["token"] => {
    switch (action.type) {
        case REFRESH_TOKEN_SUCCESS:
            return {
                ...state,
                data: action.payload,
                error: null,
            };
        case REFRESH_TOKEN_FAILURE:
            return {
                ...state,
                error: action.payload
            };
        default:
            return state;
    }
}

export default tokenReducer;