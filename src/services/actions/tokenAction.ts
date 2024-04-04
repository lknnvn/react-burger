import { ThunkAction } from 'redux-thunk';
import { Action } from 'redux';
import fetchData from '../../utils/fetchData';
import {InitialState} from "../initialState";
import {REFRESH_TOKEN_FAILURE, REFRESH_TOKEN_SUCCESS} from "../types/actions";
import Cookies from "js-cookie";

export const refreshTokenSuccess = (accessToken: string) => ({
    type: REFRESH_TOKEN_SUCCESS,
    payload: accessToken
});

export const refreshTokenFailure = (error: string) => ({
    type: REFRESH_TOKEN_FAILURE,
    payload: error
});

export const refreshAccessToken = (): ThunkAction<void, InitialState, unknown, Action<string>> => async (dispatch, getState) => {
    try {
        const refreshToken = Cookies.get("refreshToken");

        if (!refreshToken) {
            throw new Error('Refresh token is missing');
        }

        const response = await fetchData('https://norma.nomoreparties.space/api/auth/token', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({ token: refreshToken })
        });

        if (response.success) {
            dispatch(refreshTokenSuccess(response.accessToken));

            Cookies.set('accessToken', response.accessToken, { expires: 1 / 72, secure: true, sameSite: 'strict' });
            Cookies.set('refreshToken', response.refreshToken, { expires: 30, secure: true, sameSite: 'strict' });
        } else {
            dispatch(refreshTokenFailure(response.message));
        }
    } catch (error: any) {
        dispatch(refreshTokenFailure(error.message));
    }
};
