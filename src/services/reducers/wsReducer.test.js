import wsReducer, { wsState } from './wsReducer';
import {
    WS_CONNECTION_SUCCESS,
    WS_CONNECTION_ERROR,
    WS_CONNECTION_CLOSED,
    WS_GET_MESSAGE
} from '../types/wsActions';

const errorConnection = new Event('WebSocket connection error');
const payloadMessage = {
    success: true,
    orders: [
        {
            _id: "661c1c4a97ede0001d065a46",
            ingredients: [
                "643d69a5c3f7b9001cfa093e",
                "643d69a5c3f7b9001cfa0940",
                "643d69a5c3f7b9001cfa093d",
                "643d69a5c3f7b9001cfa093d"
            ],
            status: "done",
            name: "Флюоресцентный люминесцентный метеоритный бургер",
            createdAt: "2024-04-14T18:11:22.550Z",
            updatedAt: "2024-04-14T18:11:24.190Z",
            number: "38113"
        },
        {
            _id: "661c1c1c97ede0001d065a45",
            ingredients: [
                "643d69a5c3f7b9001cfa093c",
                "643d69a5c3f7b9001cfa0941",
                "643d69a5c3f7b9001cfa093c"
            ],
            status: "done",
            name: "Краторный био-марсианский бургер",
            createdAt: "2024-04-14T18:10:36.458Z",
            updatedAt: "2024-04-14T18:10:38.112Z",
            number: "38112"
        }
    ],
    total: 2,
    totalToday: 123
};

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
        const action = {type: WS_CONNECTION_ERROR, payload: errorConnection};
        const expectedState = {...wsState, connected: false, error: errorConnection};
        expect(wsReducer(wsState, action)).toEqual(expectedState);
    });

    it('должен обработать WS_CONNECTION_CLOSED', () => {
        const action = {type: WS_CONNECTION_CLOSED};
        const expectedState = {...wsState, connected: false, error: null};
        expect(wsReducer(wsState, action)).toEqual(expectedState);
    });

    it('должен обработать WS_GET_MESSAGE', () => {
        const action = {type: WS_GET_MESSAGE, payload: payloadMessage};
        const expectedState = {
            ...wsState,
            orders: payloadMessage.orders,
            total: payloadMessage.total,
            totalToday: payloadMessage.totalToday,
            error: null
        };
        expect(wsReducer(wsState, action)).toEqual(expectedState);
    });
});