// src/services/reducers/orderNotificationReducer.ts
import { LOAD_ORDER_NOTIFICATION_REQUEST, LOAD_ORDER_NOTIFICATION_SUCCESS, LOAD_ORDER_NOTIFICATION_FAILURE } from '../types/actions';
import {Action} from "redux";
import rootState, {InitialState} from "../initialState";

interface OrderDetailsAction extends Action {
    payload: any;
}

const orderNotificationReducer = (state = rootState.orderNotification, action: OrderDetailsAction): InitialState["orderNotification"] => {
    switch (action.type) {
        case LOAD_ORDER_NOTIFICATION_REQUEST:
            return {
                ...state,
                loading: true,
                error: null,
            };
        case LOAD_ORDER_NOTIFICATION_SUCCESS:
            return {
                ...state,
                data: action.payload,
                loading: false,
                error: null,
            };
        case LOAD_ORDER_NOTIFICATION_FAILURE:
            return {
                ...state,
                loading: false,
                error: action.payload,
            };
        default:
            return state;
    }
};

export default orderNotificationReducer;