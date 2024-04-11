import {
    GET_USER_FAILURE,
    GET_USER_SUCCESS,
    UPDATE_USER_FAILURE,
    UPDATE_USER_SUCCESS
} from "../types/userActions";
import {TProfileActions} from "../types/userActions";
import User from "../../interfaces/user";

export type TUserState = {
    data: User
    loading: boolean
    error: null
}

export const userState: TUserState = {
    data: {
        name: '',
        email: '',
        password: ''
    },
    loading: true,
    error: null
}

const userReducer = (state = userState, action: TProfileActions): TUserState => {
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