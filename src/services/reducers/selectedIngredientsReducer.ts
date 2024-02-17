// src/services/reducers/selectedIngredientsReducer.ts
import rootState, {InitialState} from "../initialState";
import {
    ADD_CONSTRUCTOR_INGREDIENT,
    REMOVE_CONSTRUCTOR_INGREDIENT,
    REPLACE_CONSTRUCTOR_BUNS,
    SORT_CONSTRUCTOR_INGREDIENTS
} from "../actions/types";
import {Action} from "redux";

interface SelectedIngredientsAction extends Action {
    payload: any;
}

const selectedIngredientsReducer = (state = rootState.selectedIngredients, action: SelectedIngredientsAction): InitialState["selectedIngredients"] => {
    switch (action.type) {
        case ADD_CONSTRUCTOR_INGREDIENT:
            if (action.payload.type === "bun"){
                return {
                    ...state,
                    bun: action.payload
                }
            }
            return {
                ...state,
                list: [...state.list, action.payload],
            };
        case REMOVE_CONSTRUCTOR_INGREDIENT:
            return {
                ...state, //
                list: [...state.list].slice(0, action.payload).concat([...state.list].slice(action.payload + 1))
            };
        case REPLACE_CONSTRUCTOR_BUNS:
            const newIngredients = state.list.filter(ingredient => ingredient.type !== 'bun');
            return {
                ...state,
                list: [...newIngredients, action.payload],
            };
        case SORT_CONSTRUCTOR_INGREDIENTS:
            const {dragIndex, hoverIndex} = action.payload;
            const draggedIngredient = state.list[dragIndex];
            const newList = [...state.list];
            newList.splice(dragIndex, 1);
            newList.splice(hoverIndex, 0, draggedIngredient);
            return {
                ...state,
                list: newList,
            };
        default:
            return state;
    }
};

export default selectedIngredientsReducer;