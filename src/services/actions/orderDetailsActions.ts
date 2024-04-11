import {
    LOAD_ORDER_DETAILS_FAILURE,
    LOAD_ORDER_DETAILS_REQUEST,
    LOAD_ORDER_DETAILS_SUCCESS,
    RESET_ORDER_DETAILS,
    SET_ORDER_DETAILS
} from "../types/orderDetailsActions";
import OrderData from "../../interfaces/order";
import fetchData from "../../utils/fetchData";
import {AppThunkAction} from "../types";

const BASE_URL = process.env.REACT_APP_BASE_URL;


export const loadOrderDetailsRequest = () => {
    return {
        type: LOAD_ORDER_DETAILS_REQUEST,
    };
};

export const loadOrderDetailsSuccess = (order: OrderData) => {
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

export const setOrderDetails = (order: OrderData | null) => ({
    type: SET_ORDER_DETAILS,
    payload: order,
});

export const resetOrderDetails = () => ({
    type: RESET_ORDER_DETAILS,
});


export const fetchOrderDetails = (number: string): AppThunkAction => async (dispatch) => {
    dispatch(loadOrderDetailsRequest());
    try {
        const {orders} = await fetchData(`${BASE_URL}/orders/${number}`);

        dispatch(loadOrderDetailsSuccess(orders[0]));
    } catch (error: any) {
        dispatch(loadOrderDetailsFailure(error.message));
    }
};