import store from "../store";
import {ThunkAction, ThunkDispatch} from "redux-thunk";
import {WSActionTypes} from "./wsActions";
import {TAuthActions} from "./authActions";
import {TConstructorIngredientsActions} from "./constructorIngredientsActions";
import {TCurrentIngredientActions} from "./currentIngredientActions";
import {TIngredientsActions} from "./ingredientsActions";
import {TOrderDetailsActions} from "./orderDetailsActions";
import {TOrderNotificationActions} from "./orderNotificationActions";
import {TProfileActions} from "./userActions";
import {TTokenActions} from "./tokenActions";
import {TypedUseSelectorHook, useDispatch, useSelector} from "react-redux";
import {InitialState} from "../initialState";
import {Action} from "redux";

export type TAppActions =
    | TAuthActions
    | TConstructorIngredientsActions
    | TCurrentIngredientActions
    | TIngredientsActions
    | TOrderDetailsActions
    | TOrderNotificationActions
    | TProfileActions
    | TTokenActions
    | WSActionTypes

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = ThunkDispatch<RootState, unknown, TAppActions>;
export type AppThunkAction = ThunkAction<void, InitialState, unknown, Action<string>>;

export const useTDispatch: () => AppDispatch = useDispatch;
export const useTSelector: TypedUseSelectorHook<RootState> = useSelector;