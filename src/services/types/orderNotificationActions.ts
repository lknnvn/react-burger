export const LOAD_ORDER_NOTIFICATION_REQUEST: 'LOAD_ORDER_NOTIFICATION_REQUEST' = 'LOAD_ORDER_NOTIFICATION_REQUEST';
export const LOAD_ORDER_NOTIFICATION_SUCCESS: 'LOAD_ORDER_NOTIFICATION_SUCCESS' = 'LOAD_ORDER_NOTIFICATION_SUCCESS';
export const LOAD_ORDER_NOTIFICATION_FAILURE: 'LOAD_ORDER_NOTIFICATION_FAILURE' = 'LOAD_ORDER_NOTIFICATION_FAILURE';

export interface LoadOrderNotificationRequestAction {
    readonly type: typeof LOAD_ORDER_NOTIFICATION_REQUEST;
}

export interface LoadOrderNotificationSuccessAction {
    readonly type: typeof LOAD_ORDER_NOTIFICATION_SUCCESS;
    readonly payload: any;
}

export interface LoadOrderNotificationFailureAction {
    readonly type: typeof LOAD_ORDER_NOTIFICATION_FAILURE;
    readonly payload: string;
}

export type TOrderNotificationActions =
    | LoadOrderNotificationRequestAction
    | LoadOrderNotificationSuccessAction
    | LoadOrderNotificationFailureAction;