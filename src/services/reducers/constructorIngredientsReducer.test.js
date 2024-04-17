import constructorIngredientsReducer, { constructorIngredientsState } from './constructorIngredientsReducer';
import {
    ADD_CONSTRUCTOR_INGREDIENT,
    REMOVE_CONSTRUCTOR_INGREDIENT,
    REPLACE_CONSTRUCTOR_BUNS,
    SORT_CONSTRUCTOR_INGREDIENTS
} from '../types/constructorIngredientsActions';
import {ingredientConst} from "./testConstants";

const initialConstructorState = { ...constructorIngredientsState, list: [ingredientConst.tomato, ingredientConst.ketchup] };

describe('constructorIngredientsReducer', () => {
    it('должен вернуть начальный стейт', () => {
        expect(constructorIngredientsReducer(undefined, {})).toEqual(constructorIngredientsState);
    });

    it('должен обработать ADD_CONSTRUCTOR_INGREDIENT for bun', () => {
        const action = { type: ADD_CONSTRUCTOR_INGREDIENT, payload: ingredientConst.bun1 };
        const expectedState = { ...constructorIngredientsState, bun: ingredientConst.bun1, list: [] };
        expect(constructorIngredientsReducer(constructorIngredientsState, action)).toEqual(expectedState);
    });

    it('должен обработать ADD_CONSTRUCTOR_INGREDIENT for non-bun ingredient', () => {
        const action = { type: ADD_CONSTRUCTOR_INGREDIENT, payload: ingredientConst.tomato };
        const expectedState = { ...constructorIngredientsState, list: [ingredientConst.tomato], bun: null };
        expect(constructorIngredientsReducer(constructorIngredientsState, action)).toEqual(expectedState);
    });

    it('должен обработать REMOVE_CONSTRUCTOR_INGREDIENT', () => {
        const initialState = { ...constructorIngredientsState, list: [ingredientConst.tomato] };
        const action = { type: REMOVE_CONSTRUCTOR_INGREDIENT, payload: 0 };
        const expectedState = { ...constructorIngredientsState, list: [] };
        expect(constructorIngredientsReducer(initialState, action)).toEqual(expectedState);
    });

    it('должен обработать REPLACE_CONSTRUCTOR_BUNS', () => {
        const action = { type: REPLACE_CONSTRUCTOR_BUNS, payload: ingredientConst.bun2 };
        const initialState = { ...constructorIngredientsState, bun: ingredientConst.bun1 };
        const expectedState = { ...constructorIngredientsState, bun: ingredientConst.bun2 };
        expect(constructorIngredientsReducer(initialState, action)).toEqual(expectedState);
    });

    it('должен обработать SORT_CONSTRUCTOR_INGREDIENTS', () => {
        const dragIndex = 0;
        const hoverIndex = 1;
        const action = { type: SORT_CONSTRUCTOR_INGREDIENTS, payload: { dragIndex, hoverIndex } };
        const expectedState = { ...constructorIngredientsState, list: [ingredientConst.ketchup, ingredientConst.tomato] };
        expect(constructorIngredientsReducer(initialConstructorState, action)).toEqual(expectedState);
    });
});