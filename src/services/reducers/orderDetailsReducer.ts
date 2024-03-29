// src/services/reducers/orderReducer.ts
import { LOAD_ORDER_DETAILS_REQUEST, LOAD_ORDER_DETAILS_SUCCESS, LOAD_ORDER_DETAILS_FAILURE } from '../actions/types';
import {Action} from "redux";
import rootState, {InitialState} from "../initialState";

interface OrderDetailsAction extends Action {
    payload: any;
}

const orderDetailsReducer = (state = rootState.orderDetails, action: OrderDetailsAction): InitialState["orderDetails"] => {
    switch (action.type) {
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