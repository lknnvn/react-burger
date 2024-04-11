// src/services/initialState.ts
import {ingredientsState, TIngredientsState} from "./reducers/ingredientsReducer";
import {constructorIngredientsState, TConstructorIngredientsState} from "./reducers/constructorIngredientsReducer";
import {ingredientDetailsState, TIngredientDetailsState} from "./reducers/ingredientDetailsReducer";
import {orderNotificationState, TOrderNotificationState} from "./reducers/orderNotificationReducer";
import {orderDetailsState, TOrderDetailsState} from "./reducers/orderDetailsReducer";
import {userState, TUserState} from "./reducers/userReducer";
import {authState, TAuthState} from "./reducers/authReducer";
import {tokenState, TTokenState} from "./reducers/tokenReducer";
import {wsState, TWSState} from "./reducers/wsReducer";

export interface InitialState {
    ingredients: TIngredientsState;
    selectedIngredients: TConstructorIngredientsState;
    ingredientDetails: TIngredientDetailsState;
    orderNotification: TOrderNotificationState;
    orderDetails: TOrderDetailsState;
    user: TUserState;
    auth: TAuthState;
    token: TTokenState;
    ws: TWSState;
}

const rootState: InitialState = {
    ingredients: ingredientsState,
    selectedIngredients: constructorIngredientsState,
    ingredientDetails: ingredientDetailsState,
    orderNotification: orderNotificationState,
    orderDetails: orderDetailsState,
    user: userState,
    auth: authState,
    token: tokenState,
    ws: wsState
};

export default rootState;