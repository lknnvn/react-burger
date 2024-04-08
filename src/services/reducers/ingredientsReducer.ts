// src/services/reducers/ingredientsReducer.ts
import {
    LOAD_INGREDIENTS_REQUEST,
    LOAD_INGREDIENTS_SUCCESS,
    LOAD_INGREDIENTS_FAILURE
} from '../types/ingredientsActions';
import {TIngredientsActions} from "../types/ingredientsActions";
import Ingredient from "../../interfaces/ingredient";

export type TIngredientsState = {
    list: Ingredient[];
    loading: boolean;
    error: any;
}

export const ingredientsState: TIngredientsState = {
    list: [],
    loading: false,
    error: null,
}

const ingredientsReducer = (state = ingredientsState, action: TIngredientsActions): TIngredientsState => {
    switch (action.type) {
        case LOAD_INGREDIENTS_REQUEST:
            return {
                ...state,
                loading: true
            };
        case LOAD_INGREDIENTS_SUCCESS:
            return {
                ...state,
                list: action.payload,
            };
        case LOAD_INGREDIENTS_FAILURE:
            return {
                ...state,
                error: action.payload
            };
        default:
            return state;
    }
};

export default ingredientsReducer;