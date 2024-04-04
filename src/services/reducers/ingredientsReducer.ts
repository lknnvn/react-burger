// src/services/reducers/ingredientsReducer.ts
import rootState, {InitialState} from '../initialState';
import {
    LOAD_INGREDIENTS_REQUEST,
    LOAD_INGREDIENTS_SUCCESS,
    LOAD_INGREDIENTS_FAILURE
} from '../types/actions';
import {Action} from "redux";

interface IngredientsAction extends Action {
    payload: any;
}

const ingredientsReducer = (state = rootState.ingredients, action: IngredientsAction): InitialState["ingredients"] => {
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