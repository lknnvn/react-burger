import {Middleware, MiddlewareAPI} from 'redux';
import {
    WS_CONNECTION_START,
    WS_CONNECTION_SUCCESS,
    WS_CONNECTION_ERROR,
    WS_CONNECTION_CLOSED,
    WS_GET_MESSAGE,
    WSActionTypes
} from '../types/wsActions';
import {AppDispatch, RootState} from "../types";

interface WSActions {
    WS_CONNECTION_START: typeof WS_CONNECTION_START;
    WS_CONNECTION_SUCCESS: typeof WS_CONNECTION_SUCCESS;
    WS_CONNECTION_ERROR: typeof WS_CONNECTION_ERROR;
    WS_CONNECTION_CLOSED: typeof WS_CONNECTION_CLOSED;
    WS_GET_MESSAGE: typeof WS_GET_MESSAGE;
}

export const socketMiddleware = (wsActions: WSActions): Middleware => {
    return ((store: MiddlewareAPI<AppDispatch, RootState>) => {
        let socket: WebSocket | null = null;

        const onOpen = () => {
            store.dispatch({type: wsActions.WS_CONNECTION_SUCCESS});
        };

        const onError = (error: Event) => {
            store.dispatch({type: wsActions.WS_CONNECTION_ERROR, payload: error});
        };

        const onMessage = (event: MessageEvent) => {
            const {data} = event;
            store.dispatch({type: wsActions.WS_GET_MESSAGE, payload: JSON.parse(data)});
        };

        const onClose = () => {
            store.dispatch({type: wsActions.WS_CONNECTION_CLOSED});
        };

        return next => (action: WSActionTypes) => {

            if (action.type === wsActions.WS_CONNECTION_START) {
                socket = new WebSocket(action.payload);

                socket.onopen = onOpen;
                socket.onerror = onError;
                socket.onmessage = onMessage;
                socket.onclose = onClose;
            }

            next(action);
        };

    }) as Middleware;
};