// src/services/reducers/orderNotificationReducer.ts
import {
    LOAD_ORDER_NOTIFICATION_REQUEST,
    LOAD_ORDER_NOTIFICATION_SUCCESS,
    LOAD_ORDER_NOTIFICATION_FAILURE, TOrderNotificationActions
} from '../types/orderNotificationActions';

export type TOrderNotificationState = {
    data: {
        name: string
        order: {
            number: number
        }
    } | null;
    loading: boolean;
    error: any;
}

export const orderNotificationState: TOrderNotificationState = {
    data: null,
    loading: false,
    error: null
}

const orderNotificationReducer = (state = orderNotificationState, action: TOrderNotificationActions): TOrderNotificationState => {
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