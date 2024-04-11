// src/services/actions/ingredientDetailsActions.ts
import Ingredient from '../../interfaces/ingredient';
import {RESET_CURRENT_INGREDIENT, SET_CURRENT_INGREDIENT} from '../types/currentIngredientActions';

export const setCurrentIngredient = (ingredient: Ingredient) => ({
    type: SET_CURRENT_INGREDIENT,
    payload: ingredient,
});

export const resetCurrentIngredient = () => ({
    type: RESET_CURRENT_INGREDIENT,
});