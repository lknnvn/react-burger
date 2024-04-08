// src/services/actions/orderDetailsActions.ts
import {
    LOAD_ORDER_NOTIFICATION_REQUEST,
    LOAD_ORDER_NOTIFICATION_SUCCESS,
    LOAD_ORDER_NOTIFICATION_FAILURE
} from '../types/orderNotificationActions';
import fetchData from "../../utils/fetchData";
import Cookies from "js-cookie";
import {AppThunkAction} from "../types";

const BASE_URL = process.env.REACT_APP_BASE_URL;

export const loadOrderNotificationRequest = () => {
    return {
        type: LOAD_ORDER_NOTIFICATION_REQUEST,
    };
};

export const loadOrderNotificationSuccess = (order: object) => {
    return {
        type: LOAD_ORDER_NOTIFICATION_SUCCESS,
        payload: order,
    };
};

export const loadOrderNotificationFailure = (error: Error) => {
    return {
        type: LOAD_ORDER_NOTIFICATION_FAILURE,
        payload: error.message,
    };
};

export const fetchOrdeNotification = (ingredientIds: (string | undefined)[]): AppThunkAction => async (dispatch) => {
    dispatch(loadOrderNotificationRequest());
    try {
        const data = await fetchData(`${BASE_URL}/orders`, {
            method: 'POST',
            headers: {
                Authorization: `${Cookies.get("accessToken")}`,
                "Content-Type": "application/json"
            },
            body: JSON.stringify({ingredients: ingredientIds})
        });

        dispatch(loadOrderNotificationSuccess(data));
    } catch (error: any) {
        dispatch(loadOrderNotificationFailure(error.message));
    }
};