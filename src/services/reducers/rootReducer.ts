// src/services/reducers/rootReducer.ts
import { combineReducers } from 'redux';
import ingredientsReducer from './ingredientsReducer';
import constructorIngredientsReducer from './constructorIngredientsReducer';
import ingredientDetailsReducer from "./ingredientDetailsReducer";
import orderNotificationReducer from "./orderNotificationReducer";
import authReducer from "./authReducer";
import tokenReducer from "./tokenReducer";
import userReducer from "./userReducer";
import wsReducer from "./wsReducer";
import orderDetailsReducer from "./orderDetailsReducer";
import {InitialState} from "../initialState";

const rootReducer = combineReducers<InitialState>({
    ingredients: ingredientsReducer,
    selectedIngredients: constructorIngredientsReducer,
    ingredientDetails: ingredientDetailsReducer,
    orderNotification: orderNotificationReducer,
    orderDetails: orderDetailsReducer,
    user: userReducer,
    auth: authReducer,
    token: tokenReducer,
    ws: wsReducer
});

export default rootReducer;