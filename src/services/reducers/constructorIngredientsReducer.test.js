import constructorIngredientsReducer, { constructorIngredientsState } from './constructorIngredientsReducer';
import {
    ADD_CONSTRUCTOR_INGREDIENT,
    REMOVE_CONSTRUCTOR_INGREDIENT,
    REPLACE_CONSTRUCTOR_BUNS,
    SORT_CONSTRUCTOR_INGREDIENTS
} from '../types/constructorIngredientsActions';

describe('constructorIngredientsReducer', () => {
    it('должен вернуть начальный стейт', () => {
        expect(constructorIngredientsReducer(undefined, {})).toEqual(constructorIngredientsState);
    });

    it('должен обработать ADD_CONSTRUCTOR_INGREDIENT for bun', () => {
        const bun = { id: 'bun1', type: 'bun', name: 'Bun', price: 2.99 };
        const action = { type: ADD_CONSTRUCTOR_INGREDIENT, payload: bun };
        const expectedState = { ...constructorIngredientsState, bun, list: [] };
        expect(constructorIngredientsReducer(constructorIngredientsState, action)).toEqual(expectedState);
    });

    it('должен обработать ADD_CONSTRUCTOR_INGREDIENT for non-bun ingredient', () => {
        const ingredient = { id: 'ingredient1', type: 'main', name: 'Tomato', price: 0.5 };
        const action = { type: ADD_CONSTRUCTOR_INGREDIENT, payload: ingredient };
        const expectedState = { ...constructorIngredientsState, list: [ingredient], bun: null };
        expect(constructorIngredientsReducer(constructorIngredientsState, action)).toEqual(expectedState);
    });

    it('должен обработать REMOVE_CONSTRUCTOR_INGREDIENT', () => {
        const initialState = { ...constructorIngredientsState, list: [{ id: 'ingredient1', type: 'main', name: 'Tomato', price: 0.5 }] };
        const action = { type: REMOVE_CONSTRUCTOR_INGREDIENT, payload: 0 };
        const expectedState = { ...constructorIngredientsState, list: [] };
        expect(constructorIngredientsReducer(initialState, action)).toEqual(expectedState);
    });

    it('должен обработать REPLACE_CONSTRUCTOR_BUNS', () => {
        const bun = { id: 'bun2', type: 'bun', name: 'Seasame Bun', price: 1.99 };
        const action = { type: REPLACE_CONSTRUCTOR_BUNS, payload: bun };
        const initialState = { ...constructorIngredientsState, bun: { id: 'bun1', type: 'bun', name: 'Bun', price: 2.99 } };
        const expectedState = { ...constructorIngredientsState, bun };
        expect(constructorIngredientsReducer(initialState, action)).toEqual(expectedState);
    });

    it('должен обработать SORT_CONSTRUCTOR_INGREDIENTS', () => {
        const initialState = { ...constructorIngredientsState, list: [
                { id: 'ingredient1', type: 'main', name: 'Tomato', price: 0.5 },
                { id: 'ingredient2', type: 'sauce', name: 'Ketchup', price: 0.2 }
            ] };
        const dragIndex = 0;
        const hoverIndex = 1;
        const action = { type: SORT_CONSTRUCTOR_INGREDIENTS, payload: { dragIndex, hoverIndex } };
        const expectedState = { ...constructorIngredientsState, list: [
                { id: 'ingredient2', type: 'sauce', name: 'Ketchup', price: 0.2 },
                { id: 'ingredient1', type: 'main', name: 'Tomato', price: 0.5 }
            ] };
        expect(constructorIngredientsReducer(initialState, action)).toEqual(expectedState);
    });
});