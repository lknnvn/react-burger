import constructorIngredientsReducer, { constructorIngredientsState } from './constructorIngredientsReducer';
import {
    ADD_CONSTRUCTOR_INGREDIENT,
    REMOVE_CONSTRUCTOR_INGREDIENT,
    REPLACE_CONSTRUCTOR_BUNS,
    SORT_CONSTRUCTOR_INGREDIENTS
} from '../types/constructorIngredientsActions';

const tomatoIngredient = { id: 'ingredient1', type: 'main', name: 'Tomato', price: 0.5 };
const ketchupIngredient = { id: 'ingredient2', type: 'sauce', name: 'Ketchup', price: 0.2 };
const initialConstructorState = { ...constructorIngredientsState, list: [tomatoIngredient, ketchupIngredient] };
const bun1 = { id: 'bun1', type: 'bun', name: 'Bun', price: 2.99 };
const bun2 = { id: 'bun2', type: 'bun', name: 'Seasame Bun', price: 1.99 };

describe('constructorIngredientsReducer', () => {
    it('должен вернуть начальный стейт', () => {
        expect(constructorIngredientsReducer(undefined, {})).toEqual(constructorIngredientsState);
    });

    it('должен обработать ADD_CONSTRUCTOR_INGREDIENT for bun', () => {
        const action = { type: ADD_CONSTRUCTOR_INGREDIENT, payload: bun1 };
        const expectedState = { ...constructorIngredientsState, bun: bun1, list: [] };
        expect(constructorIngredientsReducer(constructorIngredientsState, action)).toEqual(expectedState);
    });

    it('должен обработать ADD_CONSTRUCTOR_INGREDIENT for non-bun ingredient', () => {
        const action = { type: ADD_CONSTRUCTOR_INGREDIENT, payload: tomatoIngredient };
        const expectedState = { ...constructorIngredientsState, list: [tomatoIngredient], bun: null };
        expect(constructorIngredientsReducer(constructorIngredientsState, action)).toEqual(expectedState);
    });

    it('должен обработать REMOVE_CONSTRUCTOR_INGREDIENT', () => {
        const initialState = { ...constructorIngredientsState, list: [tomatoIngredient] };
        const action = { type: REMOVE_CONSTRUCTOR_INGREDIENT, payload: 0 };
        const expectedState = { ...constructorIngredientsState, list: [] };
        expect(constructorIngredientsReducer(initialState, action)).toEqual(expectedState);
    });

    it('должен обработать REPLACE_CONSTRUCTOR_BUNS', () => {
        const action = { type: REPLACE_CONSTRUCTOR_BUNS, payload: bun2 };
        const initialState = { ...constructorIngredientsState, bun: bun1 };
        const expectedState = { ...constructorIngredientsState, bun: bun2 };
        expect(constructorIngredientsReducer(initialState, action)).toEqual(expectedState);
    });

    it('должен обработать SORT_CONSTRUCTOR_INGREDIENTS', () => {
        const dragIndex = 0;
        const hoverIndex = 1;
        const action = { type: SORT_CONSTRUCTOR_INGREDIENTS, payload: { dragIndex, hoverIndex } };
        const expectedState = { ...constructorIngredientsState, list: [ketchupIngredient, tomatoIngredient] };
        expect(constructorIngredientsReducer(initialConstructorState, action)).toEqual(expectedState);
    });
});