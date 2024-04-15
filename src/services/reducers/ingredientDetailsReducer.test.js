import ingredientDetailsReducer, { ingredientDetailsState } from './ingredientDetailsReducer';
import {
    RESET_CURRENT_INGREDIENT,
    SET_CURRENT_INGREDIENT
} from '../types/currentIngredientActions';

describe('ingredientDetailsReducer', () => {
    it('должен вернуть начальный стейт', () => {
        expect(ingredientDetailsReducer(undefined, {})).toEqual(ingredientDetailsState);
    });

    it('должен обработать SET_CURRENT_INGREDIENT', () => {
        const ingredient = { id: 'ingredient1', type: 'main', name: 'Tomato', price: 0.5 };
        const action = { type: SET_CURRENT_INGREDIENT, payload: ingredient };
        const expectedState = [ingredient];
        expect(ingredientDetailsReducer(ingredientDetailsState, action)).toEqual(expectedState);
    });

    it('должен обработать RESET_CURRENT_INGREDIENT', () => {
        const initialState = [{ id: 'ingredient1', type: 'main', name: 'Tomato', price: 0.5 }];
        const action = { type: RESET_CURRENT_INGREDIENT };
        const expectedState = [];
        expect(ingredientDetailsReducer(initialState, action)).toEqual(expectedState);
    });
});
