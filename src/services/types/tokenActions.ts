export const REFRESH_TOKEN_SUCCESS: 'REFRESH_TOKEN_SUCCESS' = 'REFRESH_TOKEN_SUCCESS';
export const REFRESH_TOKEN_FAILURE: 'REFRESH_TOKEN_FAILURE' = 'REFRESH_TOKEN_FAILURE';

export interface RefreshTokenSuccessAction {
    readonly type: typeof REFRESH_TOKEN_SUCCESS;
    readonly payload: any;
}

export interface RefreshTokenFailureAction {
    readonly type: typeof REFRESH_TOKEN_FAILURE;
    readonly payload: any;
}

export type TTokenActions =
    | RefreshTokenSuccessAction
    | RefreshTokenFailureAction;
