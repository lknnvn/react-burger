import ingredientDetailsReducer, { ingredientDetailsState } from './ingredientDetailsReducer';
import {
    RESET_CURRENT_INGREDIENT,
    SET_CURRENT_INGREDIENT
} from '../types/currentIngredientActions';
import {ingredientConst} from "./testConstants";

describe('ingredientDetailsReducer', () => {
    it('должен вернуть начальный стейт', () => {
        expect(ingredientDetailsReducer(undefined, {})).toEqual(ingredientDetailsState);
    });

    it('должен обработать SET_CURRENT_INGREDIENT', () => {
        const action = { type: SET_CURRENT_INGREDIENT, payload: ingredientConst.tomato };
        const expectedState = [ingredientConst.tomato];
        expect(ingredientDetailsReducer(ingredientDetailsState, action)).toEqual(expectedState);
    });

    it('должен обработать RESET_CURRENT_INGREDIENT', () => {
        const initialState = [ingredientConst.tomato];
        const action = { type: RESET_CURRENT_INGREDIENT };
        const expectedState = [];
        expect(ingredientDetailsReducer(initialState, action)).toEqual(expectedState);
    });
});