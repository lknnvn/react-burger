// src/services/reducers/ingredientDetailsReducer.ts
import {
    RESET_CURRENT_INGREDIENT,
    SET_CURRENT_INGREDIENT,
    TCurrentIngredientActions
} from "../types/currentIngredientActions";
import Ingredient from "../../interfaces/ingredient";

export type TIngredientDetailsState = Array<Ingredient>;

export const ingredientDetailsState: TIngredientDetailsState = [];

const ingredientDetailsReducer = (state = ingredientDetailsState, action: TCurrentIngredientActions): TIngredientDetailsState => {
    switch (action.type) {
        case SET_CURRENT_INGREDIENT:
            return [action.payload];
        case RESET_CURRENT_INGREDIENT:
            return [];
        default:
            return state;
    }
};

export default ingredientDetailsReducer;