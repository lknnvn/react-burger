import ingredientsReducer, { ingredientsState } from './ingredientsReducer';
import {
    LOAD_INGREDIENTS_REQUEST,
    LOAD_INGREDIENTS_SUCCESS,
    LOAD_INGREDIENTS_FAILURE
} from '../types/ingredientsActions';

describe('ingredientsReducer', () => {
    it('должен вернуть начальный стейт', () => {
        expect(ingredientsReducer(undefined, {})).toEqual(ingredientsState);
    });

    it('должен обработать LOAD_INGREDIENTS_REQUEST', () => {
        const action = { type: LOAD_INGREDIENTS_REQUEST };
        const expectedState = { ...ingredientsState, loading: true };
        expect(ingredientsReducer(ingredientsState, action)).toEqual(expectedState);
    });

    it('должен обработать LOAD_INGREDIENTS_SUCCESS', () => {
        const ingredients = [
            { id: 'ingredient1', type: 'main', name: 'Tomato', price: 0.5 },
            { id: 'ingredient2', type: 'sauce', name: 'Ketchup', price: 0.2 }
        ];
        const action = { type: LOAD_INGREDIENTS_SUCCESS, payload: ingredients };
        const expectedState = { ...ingredientsState, list: ingredients };
        expect(ingredientsReducer(ingredientsState, action)).toEqual(expectedState);
    });

    it('должен обработать LOAD_INGREDIENTS_FAILURE', () => {
        const error = 'Failed to load ingredients';
        const action = { type: LOAD_INGREDIENTS_FAILURE, payload: error };
        const expectedState = { ...ingredientsState, error };
        expect(ingredientsReducer(ingredientsState, action)).toEqual(expectedState);
    });
});
