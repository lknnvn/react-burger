import {
    WS_CONNECTION_CLOSED,
    WS_CONNECTION_ERROR,
    WS_CONNECTION_SUCCESS,
    WS_GET_MESSAGE,
    WSActionTypes
} from "../types/wsActions";
import OrderData from "../../interfaces/order";

export type TWSState = {
    connected: boolean;
    orders: OrderData[];
    total: number | null;
    totalToday: number | null;
    error: Event | null;
}

export const wsState: TWSState = {
    connected: false,
    orders: [],
    total: null,
    totalToday: null,
    error: null
}

const wsReducer = (state = wsState, action: WSActionTypes): TWSState => {
    switch (action.type) {
        case WS_CONNECTION_SUCCESS:
            return {
                ...state,
                connected: true,
                error: null
            };
        case WS_CONNECTION_ERROR:
            return {
                ...state,
                connected: false,
                error: action.payload
            };
        case WS_CONNECTION_CLOSED:
            return {
                ...state,
                connected: false,
                error: null
            };
        case WS_GET_MESSAGE:
            return {
                ...state,
                orders: action.payload.orders,
                total: action.payload.total,
                totalToday: action.payload.totalToday,
                error: null
            };
        default:
            return state;
    }
};

export default wsReducer;