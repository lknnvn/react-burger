// src/services/actions/orderDetailsActions.ts
import { ThunkAction } from 'redux-thunk';
import { InitialState } from '../initialState';
import { Action } from 'redux';
import { LOAD_ORDER_NOTIFICATION_REQUEST, LOAD_ORDER_NOTIFICATION_SUCCESS, LOAD_ORDER_NOTIFICATION_FAILURE } from '../types/actions';
import fetchData from "../../utils/fetchData";
import Cookies from "js-cookie";

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

export const fetchOrdeNotification = (ingredientIds: (string | undefined)[]): ThunkAction<void, InitialState, unknown, Action<string>> => async (dispatch) => {
    dispatch(loadOrderNotificationRequest());
    try {
        const data = await fetchData(`${BASE_URL}/orders`, {
            method: 'POST',
            headers: {
                Authorization: `${Cookies.get("accessToken")}`,
                "Content-Type": "application/json"
            },
            body: JSON.stringify({ ingredients: ingredientIds })
        });

        dispatch(loadOrderNotificationSuccess(data));
    } catch (error: any) {
        dispatch(loadOrderNotificationFailure(error.message));
    }
};