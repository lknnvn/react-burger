// src/services/reducers/rootReducer.ts
import { combineReducers } from 'redux';
import ingredientsReducer from './ingredientsReducer';
import selectedIngredientsReducer from './selectedIngredientsReducer';
import ingredientDetailsReducer from "./ingredientDetailsReducer";
import orderDetailsReducer from "./orderDetailsReducer";
import authReducer from "./authReducer";
import tokenReducer from "./tokenReducer";
import userReducer from "./profileReducer";

const rootReducer = combineReducers({
    ingredients: ingredientsReducer,
    selectedIngredients: selectedIngredientsReducer,
    ingredientDetails: ingredientDetailsReducer,
    orderDetails: orderDetailsReducer,
    user: userReducer,
    auth: authReducer,
    token: tokenReducer
});

export default rootReducer;