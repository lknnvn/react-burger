import fetchData from '../../utils/fetchData';
import Cookies from "js-cookie";
import {refreshAccessToken} from "./tokenAction";
import User from "../../interfaces/user";
import {AppThunkAction} from "../types";

export const getUserSuccess = (user: User) => ({
    type: 'GET_USER_SUCCESS',
    payload: user
});

export const getUserFailure = (error: string) => ({
    type: 'GET_USER_FAILURE',
    payload: error
});

export const getUser = (): AppThunkAction => async (dispatch) => {
    try {
        const response = await fetchData("https://norma.nomoreparties.space/api/auth/user", {
            headers: {
                Authorization: `${Cookies.get("accessToken")}`
            }
        });

        if (response.success) {
            dispatch(getUserSuccess(response.user));
            // onSuccess(); onSuccess: () => void
        } else {
            dispatch(getUserFailure(response.user));
        }
    } catch (error: any) {
        if (error.response.status === 401) {
            try {
                await dispatch(refreshAccessToken());

                const updatedResponse = await fetchData("https://norma.nomoreparties.space/api/auth/user", {
                    headers: {
                        Authorization: `${Cookies.get("accessToken")}`
                    }
                });

                if (updatedResponse.success) {
                    dispatch(getUserSuccess(updatedResponse.user));
                    // onSuccess(); onSuccess: () => void
                } else {
                    dispatch(getUserFailure(updatedResponse.user));
                }
            } catch (refreshError: any) {
                console.error("Failed to refresh token:", refreshError);
                dispatch(getUserFailure(refreshError.message));
            }
        } else {
            console.error("Failed to update user data:", error);
            dispatch(getUserFailure(error.message));
        }
    }
};


export const updateUserSuccess = (user: User) => ({
    type: 'UPDATE_USER_SUCCESS',
    payload: user
});

export const updateUserFailure = (error: string) => ({
    type: 'UPDATE_USER_FAILURE',
    payload: error
});

export const updateUser = (userData: User): AppThunkAction => async (dispatch) => {
    try {
        const response = await fetchData("https://norma.nomoreparties.space/api/auth/user", {
            method: "PATCH",
            headers: {
                Authorization: `${Cookies.get("accessToken")}`,
                "Content-Type": "application/json"
            },
            body: JSON.stringify(userData)
        });
        dispatch(updateUserSuccess(response.user));
    } catch (error: any) {
        if (error.response.status === 401) {
            try {
                await dispatch(refreshAccessToken());

                const updatedResponse = await fetchData("https://norma.nomoreparties.space/api/auth/user", {
                    method: "PATCH",
                    headers: {
                        Authorization: `${Cookies.get("accessToken")}`,
                        "Content-Type": "application/json"
                    },
                    body: JSON.stringify(userData)
                });
                dispatch(updateUserSuccess(updatedResponse.user));
            } catch (refreshError: any) {
                console.error("Failed to refresh token:", refreshError);
                dispatch(updateUserFailure(refreshError.message));
            }
        } else {
            console.error("Failed to update user data:", error);
            dispatch(updateUserFailure(error.message));
        }
    }
};