import wsReducer, { wsState } from './wsReducer';
import {
    WS_CONNECTION_SUCCESS,
    WS_CONNECTION_ERROR,
    WS_CONNECTION_CLOSED,
    WS_GET_MESSAGE
} from '../types/wsActions';
import {wsConst} from "./testConstants";

describe('wsReducer', () => {
    it('должен вернуть начальный стейт', () => {
        expect(wsReducer(undefined, {})).toEqual(wsState);
    });

    it('должен обработать WS_CONNECTION_SUCCESS', () => {
        const action = {type: WS_CONNECTION_SUCCESS};
        const expectedState = {...wsState, connected: true, error: null};
        expect(wsReducer(wsState, action)).toEqual(expectedState);
    });

    it('должен обработать WS_CONNECTION_ERROR', () => {
        const action = {type: WS_CONNECTION_ERROR, payload: wsConst.error};
        const expectedState = {...wsState, connected: false, error: wsConst.error};
        expect(wsReducer(wsState, action)).toEqual(expectedState);
    });

    it('должен обработать WS_CONNECTION_CLOSED', () => {
        const action = {type: WS_CONNECTION_CLOSED};
        const expectedState = {...wsState, connected: false, error: null};
        expect(wsReducer(wsState, action)).toEqual(expectedState);
    });

    it('должен обработать WS_GET_MESSAGE', () => {
        const action = {type: WS_GET_MESSAGE, payload: wsConst.payloadMessage};
        const expectedState = {
            ...wsState,
            orders: wsConst.payloadMessage.orders,
            total: wsConst.payloadMessage.total,
            totalToday: wsConst.payloadMessage.totalToday,
            error: null
        };
        expect(wsReducer(wsState, action)).toEqual(expectedState);
    });
});