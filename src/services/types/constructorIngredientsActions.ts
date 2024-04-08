import Ingredient from "../../interfaces/ingredient";

export const ADD_CONSTRUCTOR_INGREDIENT: 'ADD_CONSTRUCTOR_INGREDIENT' = 'ADD_CONSTRUCTOR_INGREDIENT';
export const REMOVE_CONSTRUCTOR_INGREDIENT: 'REMOVE_CONSTRUCTOR_INGREDIENT' = 'REMOVE_CONSTRUCTOR_INGREDIENT';
export const REPLACE_CONSTRUCTOR_BUNS: 'REPLACE_CONSTRUCTOR_BUNS' = 'REPLACE_CONSTRUCTOR_BUNS';
export const SORT_CONSTRUCTOR_INGREDIENTS: 'SORT_CONSTRUCTOR_INGREDIENTS' = 'SORT_CONSTRUCTOR_INGREDIENTS';

export interface AddConstructorIngredientAction {
    readonly type: typeof ADD_CONSTRUCTOR_INGREDIENT;
    readonly payload: Ingredient;
}

export interface RemoveConstructorIngredientAction {
    readonly type: typeof REMOVE_CONSTRUCTOR_INGREDIENT;
    readonly payload: number;
}

export interface ReplaceConstructorBunsAction {
    readonly type: typeof REPLACE_CONSTRUCTOR_BUNS;
    readonly payload: Ingredient;
}

export interface SortConstructorIngredientsAction {
    readonly type: typeof SORT_CONSTRUCTOR_INGREDIENTS;
    readonly payload: {
        dragIndex: number;
        hoverIndex: number;
    };
}

export type TConstructorIngredientsActions =
    | AddConstructorIngredientAction
    | RemoveConstructorIngredientAction
    | ReplaceConstructorBunsAction
    | SortConstructorIngredientsAction;