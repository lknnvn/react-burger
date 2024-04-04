// src/services/initialState.ts
import Ingredient from '../interfaces/ingredient';
import Auth from "../interfaces/auth";
import User from "../interfaces/user";
import OrderData from "../interfaces/order";

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
    orderNotification: {
        data: {
            name: string
            order: {
                number: number
            }
        } | null;
        loading: boolean;
        error: any;
    };
    orderDetails: {
        data: OrderData | null;
        loading: boolean;
        error: any;
    };
    user: {
        data: User
        loading: boolean
        error: null
    };
    auth: {
        data: Auth | null
        isForgotPasswordVisited: boolean
        error: any
    };
    token: {
        data: {
            accessToken: string;
            refreshToken: string;
            success: boolean;
        } | null;
        error: any
    };
    ws: {
        messages: any;
        connected: boolean;
        error: any;
    }
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
    },
    orderNotification: {
        data: null,
        loading: false,
        error: null
    },
    user: {
        data: {
            name: '',
            email: '',
            password: ''
        },
        loading: true,
        error: null
    },
    auth: {
        data: null,
        isForgotPasswordVisited: false,
        error: null
    },
    token: {
        data: null,
        error: null
    },
    ws: {
        messages: [],
        connected: false,
        error: null,
    }
};

export default rootState;