import orderDetailsReducer, { orderDetailsState } from './orderDetailsReducer';
import {
    LOAD_ORDER_DETAILS_REQUEST,
    LOAD_ORDER_DETAILS_SUCCESS,
    LOAD_ORDER_DETAILS_FAILURE,
    RESET_ORDER_DETAILS,
    SET_ORDER_DETAILS
} from '../types/orderDetailsActions';
import {orderConst} from "./testConstants";

describe('orderDetailsReducer', () => {
    it('должен вернуть начальный стейт', () => {
        expect(orderDetailsReducer(undefined, {})).toEqual(orderDetailsState);
    });

    it('должен обработать SET_ORDER_DETAILS', () => {
        const action = { type: SET_ORDER_DETAILS, payload: orderConst.data };
        const expectedState = { ...orderDetailsState, data: orderConst.data, loading: false, error: null };
        expect(orderDetailsReducer(orderDetailsState, action)).toEqual(expectedState);
    });

    it('должен обработать RESET_ORDER_DETAILS', () => {
        const action = { type: RESET_ORDER_DETAILS };
        const expectedState = { ...orderDetailsState, data: null, loading: false, error: null };
        expect(orderDetailsReducer(orderDetailsState, action)).toEqual(expectedState);
    });

    it('должен обработать LOAD_ORDER_DETAILS_REQUEST', () => {
        const action = { type: LOAD_ORDER_DETAILS_REQUEST };
        const expectedState = { ...orderDetailsState, loading: true, error: null };
        expect(orderDetailsReducer(orderDetailsState, action)).toEqual(expectedState);
    });

    it('должен обработать LOAD_ORDER_DETAILS_SUCCESS', () => {
        const action = { type: LOAD_ORDER_DETAILS_SUCCESS, payload: orderConst.data };
        const expectedState = { ...orderDetailsState, data: orderConst.data, loading: false, error: null };
        expect(orderDetailsReducer(orderDetailsState, action)).toEqual(expectedState);
    });

    it('должен обработать LOAD_ORDER_DETAILS_FAILURE', () => {
        const action = { type: LOAD_ORDER_DETAILS_FAILURE, payload: orderConst.error };
        const expectedState = { ...orderDetailsState, loading: false, error: orderConst.error };
        expect(orderDetailsReducer(orderDetailsState, action)).toEqual(expectedState);
    });
});