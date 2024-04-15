import orderDetailsReducer, { orderDetailsState } from './orderDetailsReducer';
import {
    LOAD_ORDER_DETAILS_REQUEST,
    LOAD_ORDER_DETAILS_SUCCESS,
    LOAD_ORDER_DETAILS_FAILURE,
    RESET_ORDER_DETAILS,
    SET_ORDER_DETAILS
} from '../types/orderDetailsActions';

describe('orderDetailsReducer', () => {
    it('должен вернуть начальный стейт', () => {
        expect(orderDetailsReducer(undefined, {})).toEqual(orderDetailsState);
    });

    it('должен обработать SET_ORDER_DETAILS', () => {
        const orderData = { id: 'order1', totalPrice: 10.99, items: ['burger', 'drink'] };
        const action = { type: SET_ORDER_DETAILS, payload: orderData };
        const expectedState = { ...orderDetailsState, data: orderData, loading: false, error: null };
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
        const orderData = { id: 'order1', totalPrice: 10.99, items: ['burger', 'drink'] };
        const action = { type: LOAD_ORDER_DETAILS_SUCCESS, payload: orderData };
        const expectedState = { ...orderDetailsState, data: orderData, loading: false, error: null };
        expect(orderDetailsReducer(orderDetailsState, action)).toEqual(expectedState);
    });

    it('должен обработать LOAD_ORDER_DETAILS_FAILURE', () => {
        const error = 'Failed to load order details';
        const action = { type: LOAD_ORDER_DETAILS_FAILURE, payload: error };
        const expectedState = { ...orderDetailsState, loading: false, error };
        expect(orderDetailsReducer(orderDetailsState, action)).toEqual(expectedState);
    });
});