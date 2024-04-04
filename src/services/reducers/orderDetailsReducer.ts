import {Action} from "redux";
import {
    LOAD_ORDER_DETAILS_FAILURE,
    LOAD_ORDER_DETAILS_REQUEST,
    LOAD_ORDER_DETAILS_SUCCESS,
    RESET_ORDER_DETAILS,
    SET_ORDER_DETAILS
} from "../types/actions";
import rootState, {InitialState} from "../initialState";

interface OrderDetailsAction extends Action {
    payload: any;
}

const orderDetailsReducer = (state = rootState.orderDetails, action: OrderDetailsAction): InitialState['orderDetails'] => {
    switch (action.type) {
        case SET_ORDER_DETAILS:
            return {
                ...state,
                data: action.payload,
                loading: false,
                error: null,
            };
        case RESET_ORDER_DETAILS:
            return {
                ...state,
                data: null,
                loading: false,
                error: null,
            };
        case LOAD_ORDER_DETAILS_REQUEST:
            return {
                ...state,
                loading: true,
                error: null,
            };
        case LOAD_ORDER_DETAILS_SUCCESS:
            return {
                ...state,
                data: action.payload,
                loading: false,
                error: null,
            };
        case LOAD_ORDER_DETAILS_FAILURE:
            return {
                ...state,
                loading: false,
                error: action.payload,
            };
        default:
            return state;
    }
};

export default orderDetailsReducer;