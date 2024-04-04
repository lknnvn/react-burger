// src/services/actions/ingredientDetailsActions.ts
import Ingredient from '../../interfaces/ingredient';
import {RESET_CURRENT_INGREDIENT, SET_CURRENT_INGREDIENT} from '../types/actions';

export const setCurrentIngredient = (ingredient: Ingredient | null) => ({
    type: SET_CURRENT_INGREDIENT,
    payload: ingredient,
});

export const resetCurrentIngredient = () => ({
    type: RESET_CURRENT_INGREDIENT,
});