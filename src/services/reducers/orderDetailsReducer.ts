import {
    LOAD_ORDER_DETAILS_FAILURE,
    LOAD_ORDER_DETAILS_REQUEST,
    LOAD_ORDER_DETAILS_SUCCESS,
    RESET_ORDER_DETAILS,
    SET_ORDER_DETAILS
} from "../types/orderDetailsActions";
import {TOrderDetailsActions} from "../types/orderDetailsActions";
import OrderData from "../../interfaces/order";

export type TOrderDetailsState = {
    data: OrderData | null;
    loading: boolean;
    error: any;
}

export const orderDetailsState: TOrderDetailsState = {
    data: null,
    loading: false,
    error: null
}

const orderDetailsReducer = (state = orderDetailsState, action: TOrderDetailsActions): TOrderDetailsState => {
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