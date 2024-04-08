import OrderData from "../../interfaces/order";

export const SET_ORDER_DETAILS: 'SET_ORDER_DETAILS' = 'SET_ORDER_DETAILS';
export const RESET_ORDER_DETAILS: 'RESET_ORDER_DETAILS' = 'RESET_ORDER_DETAILS';
export const LOAD_ORDER_DETAILS_REQUEST: 'LOAD_ORDER_DETAILS_REQUEST' = 'LOAD_ORDER_DETAILS_REQUEST';
export const LOAD_ORDER_DETAILS_SUCCESS: 'LOAD_ORDER_DETAILS_SUCCESS' = 'LOAD_ORDER_DETAILS_SUCCESS';
export const LOAD_ORDER_DETAILS_FAILURE: 'LOAD_ORDER_DETAILS_FAILURE' = 'LOAD_ORDER_DETAILS_FAILURE';

export interface SetOrderDetailsAction {
    readonly type: typeof SET_ORDER_DETAILS;
    readonly payload: OrderData | null;
}

export interface ResetOrderDetailsAction {
    readonly type: typeof RESET_ORDER_DETAILS;
}

export interface LoadOrderDetailsRequestAction {
    readonly type: typeof LOAD_ORDER_DETAILS_REQUEST;
}

export interface LoadOrderDetailsSuccessAction {
    readonly type: typeof LOAD_ORDER_DETAILS_SUCCESS;
    readonly payload: OrderData;
}

export interface LoadOrderDetailsFailureAction {
    readonly type: typeof LOAD_ORDER_DETAILS_FAILURE;
    readonly payload: string;
}

export type TOrderDetailsActions =
    | SetOrderDetailsAction
    | ResetOrderDetailsAction
    | LoadOrderDetailsRequestAction
    | LoadOrderDetailsSuccessAction
    | LoadOrderDetailsFailureAction;