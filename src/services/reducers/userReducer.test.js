import userReducer, { userState } from './userReducer';
import {
    GET_USER_SUCCESS,
    GET_USER_FAILURE,
    UPDATE_USER_SUCCESS,
    UPDATE_USER_FAILURE
} from '../types/userActions';

const userData = { name: 'John', email: 'john@example.com' };
const errorGetUser = 'Failed to get user data';
const updatedUserData = { name: 'John Conor', email: 'john.conor@example.com' };
const errorUpdateUser = 'Failed to update user data';

describe('userReducer', () => {
    it('должен вернуть начальный стейт', () => {
        expect(userReducer(undefined, {})).toEqual(userState);
    });

    it('должен обработать GET_USER_SUCCESS', () => {
        const action = { type: GET_USER_SUCCESS, payload: userData };
        const expectedState = { ...userState, data: userData, loading: false, error: null };
        expect(userReducer(userState, action)).toEqual(expectedState);
    });

    it('должен обработать GET_USER_FAILURE', () => {
        const action = { type: GET_USER_FAILURE, payload: errorGetUser };
        const expectedState = { ...userState, loading: false, error: errorGetUser };
        expect(userReducer(userState, action)).toEqual(expectedState);
    });

    it('должен обработать UPDATE_USER_SUCCESS', () => {
        const action = { type: UPDATE_USER_SUCCESS, payload: updatedUserData };
        const expectedState = { ...userState, data: updatedUserData, loading: false, error: null };
        expect(userReducer(userState, action)).toEqual(expectedState);
    });

    it('должен обработать UPDATE_USER_FAILURE', () => {
        const action = { type: UPDATE_USER_FAILURE, payload: errorUpdateUser };
        const expectedState = { ...userState, loading: false, error: errorUpdateUser };
        expect(userReducer(userState, action)).toEqual(expectedState);
    });
});