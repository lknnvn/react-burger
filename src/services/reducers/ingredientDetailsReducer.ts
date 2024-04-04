// src/services/reducers/ingredientDetailsReducer.ts
import {RESET_CURRENT_INGREDIENT, SET_CURRENT_INGREDIENT} from '../types/actions';
import Ingredient from "../../interfaces/ingredient";
import {Action} from "redux";
import rootState from "../initialState";

interface IngredientDetailsAction extends Action {
    payload: Ingredient | string;
}

const ingredientDetailsReducer = (state = rootState.ingredientDetails, action: IngredientDetailsAction) => {
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