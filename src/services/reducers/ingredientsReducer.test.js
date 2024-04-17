import ingredientsReducer, {ingredientsState} from './ingredientsReducer';
import {
    LOAD_INGREDIENTS_REQUEST, LOAD_INGREDIENTS_SUCCESS, LOAD_INGREDIENTS_FAILURE
} from '../types/ingredientsActions';
import {ingredientConst} from "./testConstants";

const ingredients = [ingredientConst.tomato, ingredientConst.ketchup];

describe('ingredientsReducer', () => {
    it('должен вернуть начальный стейт', () => {
        expect(ingredientsReducer(undefined, {})).toEqual(ingredientsState);
    });

    it('должен обработать LOAD_INGREDIENTS_REQUEST', () => {
        const action = {type: LOAD_INGREDIENTS_REQUEST};
        const expectedState = {...ingredientsState, loading: true};
        expect(ingredientsReducer(ingredientsState, action)).toEqual(expectedState);
    });

    it('должен обработать LOAD_INGREDIENTS_SUCCESS', () => {
        const action = {type: LOAD_INGREDIENTS_SUCCESS, payload: ingredients};
        const expectedState = {...ingredientsState, list: ingredients};
        expect(ingredientsReducer(ingredientsState, action)).toEqual(expectedState);
    });

    it('должен обработать LOAD_INGREDIENTS_FAILURE', () => {
        const action = {type: LOAD_INGREDIENTS_FAILURE, payload: ingredientConst.error};
        const expectedState = {...ingredientsState, error: ingredientConst.error};
        expect(ingredientsReducer(ingredientsState, action)).toEqual(expectedState);
    });
});