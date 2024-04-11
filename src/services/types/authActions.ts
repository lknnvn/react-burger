export const SIGN_UP_SUCCESS: 'SIGN_UP_SUCCESS' = 'SIGN_UP_SUCCESS';
export const SIGN_UP_FAILURE: 'SIGN_UP_FAILURE' = 'SIGN_UP_FAILURE';
export const SIGN_IN_SUCCESS: 'SIGN_IN_SUCCESS' = 'SIGN_IN_SUCCESS';
export const SIGN_IN_FAILURE: 'SIGN_IN_FAILURE' = 'SIGN_IN_FAILURE';
export const SIGN_OUT_SUCCESS: 'SIGN_OUT_SUCCESS' = 'SIGN_OUT_SUCCESS';
export const SIGN_OUT_FAILURE: 'SIGN_OUT_FAILURE' = 'SIGN_OUT_FAILURE';
export const FORGOT_PASSWORD_SUCCESS: 'FORGOT_PASSWORD_SUCCESS' = 'FORGOT_PASSWORD_SUCCESS';
export const FORGOT_PASSWORD_FAILURE: 'FORGOT_PASSWORD_FAILURE' = 'FORGOT_PASSWORD_FAILURE';
export const RESET_PASSWORD_SUCCESS: 'RESET_PASSWORD_SUCCESS' = 'RESET_PASSWORD_SUCCESS';
export const RESET_PASSWORD_FAILURE: 'RESET_PASSWORD_FAILURE' = 'RESET_PASSWORD_FAILURE';
export const CLEAR_ERROR: 'CLEAR_ERROR' = 'CLEAR_ERROR';

export interface SignUpSuccessAction {
    readonly type: typeof SIGN_UP_SUCCESS;
    readonly payload: any;
}

export interface SignUpFailureAction {
    readonly type: typeof SIGN_UP_FAILURE;
    readonly payload: any;
}

export interface SignInSuccessAction {
    readonly type: typeof SIGN_IN_SUCCESS;
    readonly payload: any;
}

export interface SignInFailureAction {
    readonly type: typeof SIGN_IN_FAILURE;
    readonly payload: any;
}

export interface SignOutSuccessAction {
    readonly type: typeof SIGN_OUT_SUCCESS;
}

export interface SignOutFailureAction {
    readonly type: typeof SIGN_OUT_FAILURE;
    readonly payload: string;
}

export interface ForgotPasswordSuccessAction {
    readonly type: typeof FORGOT_PASSWORD_SUCCESS;
}

export interface ForgotPasswordFailureAction {
    readonly type: typeof FORGOT_PASSWORD_FAILURE;
    readonly payload: string;
}

export interface ResetPasswordSuccessAction {
    readonly type: typeof RESET_PASSWORD_SUCCESS;
}

export interface ResetPasswordFailureAction {
    readonly type: typeof RESET_PASSWORD_FAILURE;
    readonly payload: string;
}

export interface ClearErrorAction {
    readonly type: typeof CLEAR_ERROR;
}

export type TAuthActions =
    | SignUpSuccessAction
    | SignUpFailureAction
    | SignInSuccessAction
    | SignInFailureAction
    | SignOutSuccessAction
    | SignOutFailureAction
    | ForgotPasswordSuccessAction
    | ForgotPasswordFailureAction
    | ResetPasswordSuccessAction
    | ResetPasswordFailureAction
    | ClearErrorAction;