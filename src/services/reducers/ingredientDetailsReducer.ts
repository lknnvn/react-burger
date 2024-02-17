// src/services/reducers/ingredientDetailsReducer.ts
import {RESET_CURRENT_INGREDIENT, SET_CURRENT_INGREDIENT} from '../actions/types';
import Ingredient from "../../interfaces/ingredient";
import {Action} from "redux";

interface IngredientDetailsAction extends Action {
    payload: Ingredient | string;
}

const initialState: Ingredient | null = null;

const ingredientDetailsReducer = (state = initialState, action: IngredientDetailsAction) => {
    switch (action.type) {
        case SET_CURRENT_INGREDIENT:
            return action.payload;
        case RESET_CURRENT_INGREDIENT:
            return null;
        default:
            return state;
    }
};

export default ingredientDetailsReducer;