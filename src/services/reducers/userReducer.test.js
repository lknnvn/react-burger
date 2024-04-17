import userReducer, { userState } from './userReducer';
import {
    GET_USER_SUCCESS,
    GET_USER_FAILURE,
    UPDATE_USER_SUCCESS,
    UPDATE_USER_FAILURE
} from '../types/userActions';
import {authConst, user, userConst} from "./testConstants";

describe('userReducer', () => {
    it('должен вернуть начальный стейт', () => {
        expect(userReducer(undefined, {})).toEqual(userState);
    });

    it('должен обработать GET_USER_SUCCESS', () => {
        const action = { type: GET_USER_SUCCESS, payload: user };
        const expectedState = { ...userState, data: user, loading: false, error: null };
        expect(userReducer(userState, action)).toEqual(expectedState);
    });

    it('должен обработать GET_USER_FAILURE', () => {
        const action = { type: GET_USER_FAILURE, payload: userConst.errorGet };
        const expectedState = { ...userState, loading: false, error: userConst.errorGet };
        expect(userReducer(userState, action)).toEqual(expectedState);
    });

    it('должен обработать UPDATE_USER_SUCCESS', () => {
        const action = { type: UPDATE_USER_SUCCESS, payload: userConst.updatedUserData };
        const expectedState = { ...userState, data: userConst.updatedUserData, loading: false, error: null };
        expect(userReducer(userState, action)).toEqual(expectedState);
    });

    it('должен обработать UPDATE_USER_FAILURE', () => {
        const action = { type: UPDATE_USER_FAILURE, payload: userConst.errorUpdate };
        const expectedState = { ...userState, loading: false, error: userConst.errorUpdate };
        expect(userReducer(userState, action)).toEqual(expectedState);
    });
});