import orderNotificationReducer, { orderNotificationState } from './orderNotificationReducer';
import {
    LOAD_ORDER_NOTIFICATION_REQUEST,
    LOAD_ORDER_NOTIFICATION_SUCCESS,
    LOAD_ORDER_NOTIFICATION_FAILURE
} from '../types/orderNotificationActions';
import {orderNotificationConst} from "./testConstants";

describe('orderNotificationReducer', () => {
    it('должен вернуть начальный стейт', () => {
        expect(orderNotificationReducer(undefined, {})).toEqual(orderNotificationState);
    });

    it('должен обработать LOAD_ORDER_NOTIFICATION_REQUEST', () => {
        const action = { type: LOAD_ORDER_NOTIFICATION_REQUEST };
        const expectedState = { ...orderNotificationState, loading: true, error: null };
        expect(orderNotificationReducer(orderNotificationState, action)).toEqual(expectedState);
    });

    it('должен обработать LOAD_ORDER_NOTIFICATION_SUCCESS', () => {
        const action = { type: LOAD_ORDER_NOTIFICATION_SUCCESS, payload: orderNotificationConst.data };
        const expectedState = { ...orderNotificationState, data: orderNotificationConst.data, loading: false, error: null };
        expect(orderNotificationReducer(orderNotificationState, action)).toEqual(expectedState);
    });

    it('должен обработать LOAD_ORDER_NOTIFICATION_FAILURE', () => {
        const action = { type: LOAD_ORDER_NOTIFICATION_FAILURE, payload: orderNotificationConst.error };
        const expectedState = { ...orderNotificationState, loading: false, error: orderNotificationConst.error };
        expect(orderNotificationReducer(orderNotificationState, action)).toEqual(expectedState);
    });
});