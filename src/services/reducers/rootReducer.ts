// src/services/reducers/rootReducer.ts
import { combineReducers } from 'redux';
import ingredientsReducer from './ingredientsReducer';
import selectedIngredientsReducer from './selectedIngredientsReducer';
import ingredientDetailsReducer from "./ingredientDetailsReducer";
import orderDetailsReducer from "./orderDetailsReducer";

const rootReducer = combineReducers({
    ingredients: ingredientsReducer,
    selectedIngredients: selectedIngredientsReducer,
    ingredientDetails: ingredientDetailsReducer,
    orderDetails: orderDetailsReducer
});

export default rootReducer;