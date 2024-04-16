import tokenReducer, { tokenState } from './tokenReducer';
import {
    REFRESH_TOKEN_SUCCESS,
    REFRESH_TOKEN_FAILURE
} from '../types/tokenActions';

const tokenData = { accessToken: 'newAccessToken', refreshToken: 'newRefreshToken', success: true };
const errorRefreshToken = 'Failed to refresh token';

describe('tokenReducer', () => {
    it('должен вернуть начальный стейт', () => {
        expect(tokenReducer(undefined, {})).toEqual(tokenState);
    });

    it('должен обработать REFRESH_TOKEN_SUCCESS', () => {
        const action = { type: REFRESH_TOKEN_SUCCESS, payload: tokenData };
        const expectedState = { ...tokenState, data: tokenData, error: null };
        expect(tokenReducer(tokenState, action)).toEqual(expectedState);
    });

    it('должен обработать REFRESH_TOKEN_FAILURE', () => {
        const action = { type: REFRESH_TOKEN_FAILURE, payload: errorRefreshToken };
        const expectedState = { ...tokenState, error: errorRefreshToken };
        expect(tokenReducer(tokenState, action)).toEqual(expectedState);
    });
});