import ingredientsReducer, { ingredientsState } from './ingredientsReducer';
import {
    LOAD_INGREDIENTS_REQUEST,
    LOAD_INGREDIENTS_SUCCESS,
    LOAD_INGREDIENTS_FAILURE
} from '../types/ingredientsActions';

const tomatoIngredient = { id: 'ingredient1', type: 'main', name: 'Tomato', price: 0.5 };
const ketchupIngredient = { id: 'ingredient2', type: 'sauce', name: 'Ketchup', price: 0.2 };
const ingredients = [tomatoIngredient, ketchupIngredient];
const errorLoadIngredients = 'Failed to load ingredients';

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
        const action = { type: LOAD_INGREDIENTS_SUCCESS, payload: ingredients };
        const expectedState = { ...ingredientsState, list: ingredients };
        expect(ingredientsReducer(ingredientsState, action)).toEqual(expectedState);
    });

    it('должен обработать LOAD_INGREDIENTS_FAILURE', () => {
        const action = { type: LOAD_INGREDIENTS_FAILURE, payload: errorLoadIngredients };
        const expectedState = { ...ingredientsState, error: errorLoadIngredients };
        expect(ingredientsReducer(ingredientsState, action)).toEqual(expectedState);
    });
});