import tokenReducer, { tokenState } from './tokenReducer';
import {
    REFRESH_TOKEN_SUCCESS,
    REFRESH_TOKEN_FAILURE
} from '../types/tokenActions';
import {tokenConst} from "./testConstants";

describe('tokenReducer', () => {
    it('должен вернуть начальный стейт', () => {
        expect(tokenReducer(undefined, {})).toEqual(tokenState);
    });

    it('должен обработать REFRESH_TOKEN_SUCCESS', () => {
        const action = { type: REFRESH_TOKEN_SUCCESS, payload: tokenConst.data };
        const expectedState = { ...tokenState, data: tokenConst.data, error: null };
        expect(tokenReducer(tokenState, action)).toEqual(expectedState);
    });

    it('должен обработать REFRESH_TOKEN_FAILURE', () => {
        const action = { type: REFRESH_TOKEN_FAILURE, payload: tokenConst.error };
        const expectedState = { ...tokenState, error: tokenConst.error };
        expect(tokenReducer(tokenState, action)).toEqual(expectedState);
    });
});