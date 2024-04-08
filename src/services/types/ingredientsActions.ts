import Ingredient from "../../interfaces/ingredient";

export const LOAD_INGREDIENTS_REQUEST: 'LOAD_INGREDIENTS_REQUEST' = 'LOAD_INGREDIENTS_REQUEST';
export const LOAD_INGREDIENTS_SUCCESS: 'LOAD_INGREDIENTS_SUCCESS' = 'LOAD_INGREDIENTS_SUCCESS';
export const LOAD_INGREDIENTS_FAILURE: 'LOAD_INGREDIENTS_FAILURE' = 'LOAD_INGREDIENTS_FAILURE';

export interface LoadIngredientsRequestAction {
    readonly type: typeof LOAD_INGREDIENTS_REQUEST;
}

export interface LoadIngredientsSuccessAction {
    readonly type: typeof LOAD_INGREDIENTS_SUCCESS;
    readonly payload: Ingredient[];
}

export interface LoadIngredientsFailureAction {
    readonly type: typeof LOAD_INGREDIENTS_FAILURE;
    readonly payload: string;
}

export type TIngredientsActions =
    | LoadIngredientsRequestAction
    | LoadIngredientsSuccessAction
    | LoadIngredientsFailureAction;