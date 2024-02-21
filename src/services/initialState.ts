// src/services/initialState.ts
import Ingredient from '../interfaces/ingredient';

export interface InitialState {
    ingredients: {
        list: Ingredient[];
        loading: boolean;
        error: any;
    };
    selectedIngredients: {
        list: Ingredient[],
        bun: Ingredient | null
    };
    ingredientDetails: Ingredient | null;
    orderDetails: {
        data: {
            name: string
            order: {
                number: number
            }
        } | null;
        loading: boolean;
        error: any;
    };
}

const rootState: InitialState = {
    ingredients: {
        list: [],
        loading: false,
        error: null,
    },
    selectedIngredients: {
        list: [],
        bun: null
    },
    ingredientDetails: null,
    orderDetails: {
        data: null,
        loading: false,
        error: null
    }
};

export default rootState;