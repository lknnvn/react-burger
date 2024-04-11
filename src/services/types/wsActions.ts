import OrderData from "../../interfaces/order";

export const WS_CONNECTION_START: 'WS_CONNECTION_START' = 'WS_CONNECTION_START';
export const WS_CONNECTION_SUCCESS: 'WS_CONNECTION_SUCCESS' = 'WS_CONNECTION_SUCCESS';
export const WS_CONNECTION_ERROR: 'WS_CONNECTION_ERROR' = 'WS_CONNECTION_ERROR';
export const WS_CONNECTION_CLOSED: 'WS_CONNECTION_CLOSED' = 'WS_CONNECTION_CLOSED';
export const WS_GET_MESSAGE: 'WS_GET_MESSAGE' = 'WS_GET_MESSAGE';

export interface WSConnectionStartAction {
    readonly type: typeof WS_CONNECTION_START;
    readonly payload: string;
}

export interface WSConnectionSuccessAction {
    readonly type: typeof WS_CONNECTION_SUCCESS;
}

export interface WSConnectionErrorAction {
    readonly type: typeof WS_CONNECTION_ERROR;
    readonly payload: Event;
}

type TWSData = {
    success: boolean;
    orders: OrderData[];
    total: number;
    totalToday: number;
};

export interface WSGetMessageAction {
    readonly type: typeof WS_GET_MESSAGE;
    readonly payload: TWSData;
}

export interface WSConnectionClosedAction {
    readonly type: typeof WS_CONNECTION_CLOSED;
}

export type WSActionTypes =
    | WSConnectionStartAction
    | WSConnectionSuccessAction
    | WSConnectionErrorAction
    | WSGetMessageAction
    | WSConnectionClosedAction;