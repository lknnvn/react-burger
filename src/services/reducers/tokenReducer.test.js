import tokenReducer, { tokenState } from './tokenReducer';
import {
    REFRESH_TOKEN_SUCCESS,
    REFRESH_TOKEN_FAILURE
} from '../types/tokenActions';

describe('tokenReducer', () => {
    it('должен вернуть начальный стейт', () => {
        expect(tokenReducer(undefined, {})).toEqual(tokenState);
    });

    it('должен обработать REFRESH_TOKEN_SUCCESS', () => {
        const tokenData = { accessToken: 'newAccessToken', refreshToken: 'newRefreshToken', success: true };
        const action = { type: REFRESH_TOKEN_SUCCESS, payload: tokenData };
        const expectedState = { ...tokenState, data: tokenData, error: null };
        expect(tokenReducer(tokenState, action)).toEqual(expectedState);
    });

    it('должен обработать REFRESH_TOKEN_FAILURE', () => {
        const error = 'Failed to refresh token';
        const action = { type: REFRESH_TOKEN_FAILURE, payload: error };
        const expectedState = { ...tokenState, error };
        expect(tokenReducer(tokenState, action)).toEqual(expectedState);
    });
});