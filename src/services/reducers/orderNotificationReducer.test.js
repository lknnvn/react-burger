import orderNotificationReducer, { orderNotificationState } from './orderNotificationReducer';
import {
    LOAD_ORDER_NOTIFICATION_REQUEST,
    LOAD_ORDER_NOTIFICATION_SUCCESS,
    LOAD_ORDER_NOTIFICATION_FAILURE
} from '../types/orderNotificationActions';

const orderNotificationData = { name: 'John Conor', order: { number: 123 } };
const errorLoadOrderNotification = 'Failed to load order notification';

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
        const action = { type: LOAD_ORDER_NOTIFICATION_SUCCESS, payload: orderNotificationData };
        const expectedState = { ...orderNotificationState, data: orderNotificationData, loading: false, error: null };
        expect(orderNotificationReducer(orderNotificationState, action)).toEqual(expectedState);
    });

    it('должен обработать LOAD_ORDER_NOTIFICATION_FAILURE', () => {
        const action = { type: LOAD_ORDER_NOTIFICATION_FAILURE, payload: errorLoadOrderNotification };
        const expectedState = { ...orderNotificationState, loading: false, error: errorLoadOrderNotification };
        expect(orderNotificationReducer(orderNotificationState, action)).toEqual(expectedState);
    });
});