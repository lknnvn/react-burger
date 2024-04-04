// src/services/actions/selectedIngredientsActions.ts
import Ingredient from '../../interfaces/ingredient';
import {
    ADD_CONSTRUCTOR_INGREDIENT,
    REMOVE_CONSTRUCTOR_INGREDIENT,
    REPLACE_CONSTRUCTOR_BUNS,
    SORT_CONSTRUCTOR_INGREDIENTS
} from '../types/actions';
import { v4 as uuid } from 'uuid';

export const addConstructorIngredient = (ingredient: Ingredient) => {
    return {
        type: ADD_CONSTRUCTOR_INGREDIENT,
        payload: {
            ...ingredient,
            id: uuid()
        },
    };
};

export const removeConstructorIngredient = (index: number) => {
    return {
        type: REMOVE_CONSTRUCTOR_INGREDIENT,
        payload: index,
    };
};

export const replaceConstructorBuns = (bun: Ingredient) => {
    return {
        type: REPLACE_CONSTRUCTOR_BUNS,
        payload: bun,
    };
};

export const sortConstructorIngredients = (dragIndex: number, hoverIndex: number) => {
    return {
        type: SORT_CONSTRUCTOR_INGREDIENTS,
        payload: { dragIndex, hoverIndex },
    };
};