import authReducer, { authState } from './authReducer';
import {
    SIGN_IN_SUCCESS,
    SIGN_IN_FAILURE,
    SIGN_OUT_SUCCESS,
    SIGN_OUT_FAILURE,
    SIGN_UP_SUCCESS,
    SIGN_UP_FAILURE,
    FORGOT_PASSWORD_SUCCESS,
    FORGOT_PASSWORD_FAILURE,
    RESET_PASSWORD_SUCCESS,
    RESET_PASSWORD_FAILURE,
    CLEAR_ERROR
} from '../types/authActions';
import {authConst} from "./testConstants";

describe('authReducer', () => {
    it('должен вернуть начальный стейт', () => {
        expect(authReducer(undefined, {})).toEqual(authState);
    });

    it('должен обработать SIGN_IN_SUCCESS', () => {
        const action = { type: SIGN_IN_SUCCESS, payload: authConst.successPayload };
        const expectedState = { ...authState, data: action.payload, error: null };
        expect(authReducer(authState, action)).toEqual(expectedState);
    });

    it('должен обработать SIGN_IN_FAILURE', () => {
        const action = { type: SIGN_IN_FAILURE, payload: authConst.errorSignIn };
        const expectedState = { ...authState, data: null, error: authConst.errorSignIn };
        expect(authReducer(authState, action)).toEqual(expectedState);
    });

    it('должен обработать SIGN_OUT_SUCCESS', () => {
        const action = { type: SIGN_OUT_SUCCESS };
        const expectedState = { ...authState, data: null, isForgotPasswordVisited: false, error: null };
        expect(authReducer(authState, action)).toEqual(expectedState);
    });

    it('должен обработать SIGN_OUT_FAILURE', () => {
        const action = { type: SIGN_OUT_FAILURE, payload: authConst.errorSignOut };
        const expectedState = { ...authState, error: authConst.errorSignOut };
        expect(authReducer(authState, action)).toEqual(expectedState);
    });

    it('должен обработать SIGN_UP_SUCCESS', () => {
        const action = { type: SIGN_UP_SUCCESS, payload: authConst.successPayload };
        const expectedState = { ...authState, data: action.payload, error: null };
        expect(authReducer(authState, action)).toEqual(expectedState);
    });

    it('должен обработать SIGN_UP_FAILURE', () => {
        const action = { type: SIGN_UP_FAILURE, payload: authConst.errorSignUp };
        const expectedState = { ...authState, data: null, error: authConst.errorSignUp };
        expect(authReducer(authState, action)).toEqual(expectedState);
    });

    it('должен обработать FORGOT_PASSWORD_SUCCESS', () => {
        const action = { type: FORGOT_PASSWORD_SUCCESS };
        const expectedState = { ...authState, isForgotPasswordVisited: true, error: null };
        expect(authReducer(authState, action)).toEqual(expectedState);
    });

    it('должен обработать FORGOT_PASSWORD_FAILURE', () => {
        const action = { type: FORGOT_PASSWORD_FAILURE, payload: authConst.errorForgotPassword };
        const expectedState = { ...authState, error: authConst.errorForgotPassword };
        expect(authReducer(authState, action)).toEqual(expectedState);
    });

    it('должен обработать RESET_PASSWORD_SUCCESS', () => {
        const action = { type: RESET_PASSWORD_SUCCESS };
        const expectedState = { ...authState, error: null };
        expect(authReducer(authState, action)).toEqual(expectedState);
    });

    it('должен обработать RESET_PASSWORD_FAILURE', () => {
        const action = { type: RESET_PASSWORD_FAILURE, payload: authConst.errorForgotPassword };
        const expectedState = { ...authState, error: authConst.errorForgotPassword };
        expect(authReducer(authState, action)).toEqual(expectedState);
    });

    it('должен обработать CLEAR_ERROR', () => {
        const action = { type: CLEAR_ERROR };
        const expectedState = { ...authState, error: null };
        expect(authReducer(authState, action)).toEqual(expectedState);
    });
});