// src/services/reducers/constructorIngredientsReducer.ts
import {
    ADD_CONSTRUCTOR_INGREDIENT,
    REMOVE_CONSTRUCTOR_INGREDIENT,
    REPLACE_CONSTRUCTOR_BUNS,
    SORT_CONSTRUCTOR_INGREDIENTS
} from "../types/constructorIngredientsActions";
import {TConstructorIngredientsActions} from "../types/constructorIngredientsActions";
import Ingredient from "../../interfaces/ingredient";

export type TConstructorIngredientsState = {
    list: Ingredient[],
    bun: Ingredient | null
}

export const constructorIngredientsState: TConstructorIngredientsState = {
    list: [],
    bun: null
}

const constructorIngredientsReducer = (state = constructorIngredientsState, action: TConstructorIngredientsActions): TConstructorIngredientsState => {
    switch (action.type) {
        case ADD_CONSTRUCTOR_INGREDIENT:
            return {
                ...state,
                bun: action.payload.type === "bun" ? action.payload : state.bun,
                list: action.payload.type !== "bun" ? [...state.list, action.payload] : state.list,
            }
        case REMOVE_CONSTRUCTOR_INGREDIENT:
            return {
                ...state,
                list: [...state.list].slice(0, action.payload).concat([...state.list].slice(action.payload + 1))
            };
        case REPLACE_CONSTRUCTOR_BUNS:
            return {
                ...state,
                bun: action.payload,
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

export default constructorIngredientsReducer;