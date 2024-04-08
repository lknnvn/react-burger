import User from "../../interfaces/user";

export const GET_USER_SUCCESS: 'GET_USER_SUCCESS' = 'GET_USER_SUCCESS';
export const GET_USER_FAILURE: 'GET_USER_FAILURE' = 'GET_USER_FAILURE';
export const UPDATE_USER_SUCCESS: 'UPDATE_USER_SUCCESS' = 'UPDATE_USER_SUCCESS';
export const UPDATE_USER_FAILURE: 'UPDATE_USER_FAILURE' = 'UPDATE_USER_FAILURE';

export interface GetUserSuccessAction {
    readonly type: typeof GET_USER_SUCCESS;
    readonly payload: User;
}

export interface GetUserFailureAction {
    readonly type: typeof GET_USER_FAILURE;
    readonly payload: any;
}

export interface UpdateUserSuccessAction {
    readonly type: typeof UPDATE_USER_SUCCESS;
    readonly payload: User;
}

export interface UpdateUserFailureAction {
    readonly type: typeof UPDATE_USER_FAILURE;
    readonly payload: any;
}

export type TProfileActions =
    | GetUserSuccessAction
    | GetUserFailureAction
    | UpdateUserSuccessAction
    | UpdateUserFailureAction;