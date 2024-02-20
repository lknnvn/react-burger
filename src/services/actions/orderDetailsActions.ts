// src/services/actions/orderActions.ts
import { ThunkAction } from 'redux-thunk';
import { InitialState } from '../initialState';
import { Action } from 'redux';
import { LOAD_ORDER_DETAILS_REQUEST, LOAD_ORDER_DETAILS_SUCCESS, LOAD_ORDER_DETAILS_FAILURE } from './types';
import fetchData from "../../utils/fetchData";

const BASE_URL = process.env.REACT_APP_BASE_URL;

export const loadOrderDetailsRequest = () => {
    return {
        type: LOAD_ORDER_DETAILS_REQUEST,
    };
};

export const loadOrderDetailsSuccess = (order: object) => {
    return {
        type: LOAD_ORDER_DETAILS_SUCCESS,
        payload: order,
    };
};

export const loadOrderDetailsFailure = (error: Error) => {
    return {
        type: LOAD_ORDER_DETAILS_FAILURE,
        payload: error.message,
    };
};

export const fetchOrderDetails = (ingredientIds: string[]): ThunkAction<void, InitialState, unknown, Action<string>> => async (dispatch) => {
    dispatch(loadOrderDetailsRequest());
    try {
        const {data} = await fetchData(`${BASE_URL}/orders`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({ ingredients: ingredientIds })
        });

        dispatch(loadOrderDetailsSuccess(data));
    } catch (error: any) {
        dispatch(loadOrderDetailsFailure(error.message));
    }
};