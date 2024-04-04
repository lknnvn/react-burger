// src/services/reducers/rootReducer.ts
import { combineReducers } from 'redux';
import ingredientsReducer from './ingredientsReducer';
import selectedIngredientsReducer from './selectedIngredientsReducer';
import ingredientDetailsReducer from "./ingredientDetailsReducer";
import orderNotificationReducer from "./orderNotificationReducer";
import authReducer from "./authReducer";
import tokenReducer from "./tokenReducer";
import userReducer from "./profileReducer";
import wsReducer from "./wsReducer";
import orderDetailsReducer from "./orderDetailsReducer";

const rootReducer = combineReducers({
    ingredients: ingredientsReducer,
    selectedIngredients: selectedIngredientsReducer,
    ingredientDetails: ingredientDetailsReducer,
    orderNotification: orderNotificationReducer,
    orderDetails: orderDetailsReducer,
    user: userReducer,
    auth: authReducer,
    token: tokenReducer,
    ws: wsReducer
});

export default rootReducer;