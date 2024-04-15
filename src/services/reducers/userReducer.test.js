import userReducer, { userState } from './userReducer';
import {
    GET_USER_SUCCESS,
    GET_USER_FAILURE,
    UPDATE_USER_SUCCESS,
    UPDATE_USER_FAILURE
} from '../types/userActions';

describe('userReducer', () => {
    it('должен вернуть начальный стейт', () => {
        expect(userReducer(undefined, {})).toEqual(userState);
    });

    it('должен обработать GET_USER_SUCCESS', () => {
        const userData = { name: 'John', email: 'john@example.com' };
        const action = { type: GET_USER_SUCCESS, payload: userData };
        const expectedState = { ...userState, data: userData, loading: false, error: null };
        expect(userReducer(userState, action)).toEqual(expectedState);
    });

    it('должен обработать GET_USER_FAILURE', () => {
        const error = 'Failed to get user data';
        const action = { type: GET_USER_FAILURE, payload: error };
        const expectedState = { ...userState, loading: false, error };
        expect(userReducer(userState, action)).toEqual(expectedState);
    });

    it('должен обработать UPDATE_USER_SUCCESS', () => {
        const updatedUserData = { name: 'John Doe', email: 'john.doe@example.com' };
        const action = { type: UPDATE_USER_SUCCESS, payload: updatedUserData };
        const expectedState = { ...userState, data: updatedUserData, loading: false, error: null };
        expect(userReducer(userState, action)).toEqual(expectedState);
    });

    it('должен обработать UPDATE_USER_FAILURE', () => {
        const error = 'Failed to update user data';
        const action = { type: UPDATE_USER_FAILURE, payload: error };
        const expectedState = { ...userState, loading: false, error };
        expect(userReducer(userState, action)).toEqual(expectedState);
    });
});