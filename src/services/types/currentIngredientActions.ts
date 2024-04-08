import Ingredient from "../../interfaces/ingredient";

export const SET_CURRENT_INGREDIENT: 'SET_CURRENT_INGREDIENT' = 'SET_CURRENT_INGREDIENT';
export const RESET_CURRENT_INGREDIENT: 'RESET_CURRENT_INGREDIENT' = 'RESET_CURRENT_INGREDIENT';

export interface SetCurrentIngredientAction {
    readonly type: typeof SET_CURRENT_INGREDIENT;
    readonly payload: Ingredient;
}

export interface ResetCurrentIngredientAction {
    readonly type: typeof RESET_CURRENT_INGREDIENT;
}

export type TCurrentIngredientActions =
    | SetCurrentIngredientAction
    | ResetCurrentIngredientAction;