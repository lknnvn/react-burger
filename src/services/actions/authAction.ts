// src/services/actions/authAction.ts
import {
    CLEAR_ERROR, FORGOT_PASSWORD_FAILURE, FORGOT_PASSWORD_SUCCESS, RESET_PASSWORD_FAILURE, RESET_PASSWORD_SUCCESS,
    SIGN_IN_FAILURE,
    SIGN_IN_SUCCESS, SIGN_OUT_FAILURE,
    SIGN_OUT_SUCCESS,
    SIGN_UP_FAILURE,
    SIGN_UP_SUCCESS
} from "../types/authActions";
import fetchData from "../../utils/fetchData";
import SignIn from "../../interfaces/signIn";
import Cookies from "js-cookie";
import Auth from "../../interfaces/auth";
import SignUp from "../../interfaces/signUp";
import {AppThunkAction} from "../types";

export const signInSuccess = (auth: Auth) => ({
    type: SIGN_IN_SUCCESS,
    payload: auth
});

export const signInFailure = (error: string) => ({
    type: SIGN_IN_FAILURE,
    payload: error
});

export const signOutSuccess = () => ({
    type: SIGN_OUT_SUCCESS,
});

export const signOutFailure = (error: string) => ({
    type: SIGN_OUT_FAILURE,
    payload: error,
});

export const signUpSuccess = (auth: Auth) => ({
    type: SIGN_UP_SUCCESS,
    payload: auth
});

export const signUpFailure = (error: string) => ({
    type: SIGN_UP_FAILURE,
    payload: error
});

export const forgotPasswordSuccess = () => ({
    type: FORGOT_PASSWORD_SUCCESS
});

export const forgotPasswordFailure = (error: string) => ({
    type: FORGOT_PASSWORD_FAILURE,
    payload: error
});

export const resetPasswordSuccess = () => ({
    type: RESET_PASSWORD_SUCCESS,
});

export const resetPasswordFailure = (error: string) => ({
    type: RESET_PASSWORD_FAILURE,
    payload: error
});

export const clearError = () => ({
    type: CLEAR_ERROR,
});

export const signInRequest = (login: SignIn, onSuccess: () => void): AppThunkAction => async (dispatch) => {
    try {
        const response = await fetchData('https://norma.nomoreparties.space/api/auth/login', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(login)
        });

        if(response.success){
            dispatch(signInSuccess(response));

            Cookies.set('accessToken', response.accessToken, { expires: 1 / 72, secure: true, sameSite: 'strict' });
            Cookies.set('refreshToken', response.refreshToken, { expires: 30, secure: true, sameSite: 'strict' });

            onSuccess();
        } else {
            dispatch(signInFailure(response.message));
        }
    } catch (error: any) {
        dispatch(signInFailure(error.message));
    }
};

export const signOutRequest = (): AppThunkAction => async (dispatch) => {
    try {
        const refreshToken = Cookies.get("refreshToken");
        if (!refreshToken) {
            throw new Error("Refresh token not found");
        }

        await fetchData("https://norma.nomoreparties.space/api/auth/logout", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({ token: refreshToken }),
        });

        Cookies.remove("accessToken");
        Cookies.remove("refreshToken");
        dispatch(signOutSuccess());
    } catch (error: any) {
        dispatch(signOutFailure(error.message));
    }
};

export const signUpRequest = (registerData: SignUp, onSuccess: () => void): AppThunkAction => async (dispatch) => {
    try {
        const response = await fetchData('https://norma.nomoreparties.space/api/auth/register', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(registerData)
        });

        if(response.success){
            dispatch(signUpSuccess(response));

            Cookies.set('accessToken', response.accessToken, { expires: 1 / 72, secure: true, sameSite: 'strict' });
            Cookies.set('refreshToken', response.refreshToken, { expires: 30, secure: true, sameSite: 'strict' });

            onSuccess();
        } else {
            dispatch(signUpFailure(response.message));
        }
    } catch (error: any) {
        dispatch(signUpFailure(error.message));
    }
};

export const forgotPasswordRequest = (email: string, onSuccess: () => void): AppThunkAction => async (dispatch) => {
    try {
        const response = await fetchData('https://norma.nomoreparties.space/api/password-reset', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({ email })
        });

        if (response.success) {
            dispatch(forgotPasswordSuccess());
            onSuccess();
        } else {
            dispatch(forgotPasswordFailure(response.message));
        }
    } catch (error: any) {
        dispatch(forgotPasswordFailure(error.message));
    }
};

export const resetPasswordRequest = (password: string, resetToken: string, onSuccess: () => void): AppThunkAction => async (dispatch) => {
    try {
        const response = await fetch('https://norma.nomoreparties.space/api/password-reset/reset', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({ password, resetToken })
        });

        if (response.ok) {
            const data = await response.json();
            if (data.success) {
                dispatch(resetPasswordSuccess());
                onSuccess();
            } else {
                dispatch(resetPasswordFailure(data.message));
            }
        } else {
            dispatch(resetPasswordFailure('Failed to reset password'));
        }
    } catch (error) {
        console.error('Error:', error);
        dispatch(resetPasswordFailure('Failed to reset password'));
    }
};