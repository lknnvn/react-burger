import {
    REFRESH_TOKEN_FAILURE,
    REFRESH_TOKEN_SUCCESS
} from "../types/tokenActions";
import {TTokenActions} from "../types/tokenActions";

export type TTokenState = {
    data: {
        accessToken: string;
        refreshToken: string;
        success: boolean;
    } | null;
    error: any
}

export const tokenState: TTokenState = {
    data: null,
    error: null
}

const tokenReducer = (state = tokenState, action: TTokenActions): TTokenState => {
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