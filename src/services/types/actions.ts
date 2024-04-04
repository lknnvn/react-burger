import Ingredient from '../../interfaces/ingredient';
import User from '../../interfaces/user';
import OrderData from "../../interfaces/order";

export const LOAD_INGREDIENTS_SUCCESS: 'LOAD_INGREDIENTS_SUCCESS' = 'LOAD_INGREDIENTS_SUCCESS';
export const LOAD_INGREDIENTS_FAILURE: 'LOAD_INGREDIENTS_FAILURE' = 'LOAD_INGREDIENTS_FAILURE';
export const LOAD_INGREDIENTS_REQUEST: 'LOAD_INGREDIENTS_REQUEST' = 'LOAD_INGREDIENTS_REQUEST';

export const SET_CURRENT_INGREDIENT: 'SET_CURRENT_INGREDIENT' = 'SET_CURRENT_INGREDIENT';
export const RESET_CURRENT_INGREDIENT: 'RESET_CURRENT_INGREDIENT' = 'RESET_CURRENT_INGREDIENT';

export const ADD_CONSTRUCTOR_INGREDIENT: 'ADD_CONSTRUCTOR_INGREDIENT' = 'ADD_CONSTRUCTOR_INGREDIENT';
export const REMOVE_CONSTRUCTOR_INGREDIENT: 'REMOVE_CONSTRUCTOR_INGREDIENT' = 'REMOVE_CONSTRUCTOR_INGREDIENT';
export const REPLACE_CONSTRUCTOR_BUNS: 'REPLACE_CONSTRUCTOR_BUNS' = 'REPLACE_CONSTRUCTOR_BUNS';
export const SORT_CONSTRUCTOR_INGREDIENTS: 'SORT_CONSTRUCTOR_INGREDIENTS' = 'SORT_CONSTRUCTOR_INGREDIENTS';

export const LOAD_ORDER_NOTIFICATION_REQUEST: 'LOAD_ORDER_NOTIFICATION_REQUEST' = 'LOAD_ORDER_NOTIFICATION_REQUEST';
export const LOAD_ORDER_NOTIFICATION_SUCCESS: 'LOAD_ORDER_NOTIFICATION_SUCCESS' = 'LOAD_ORDER_NOTIFICATION_SUCCESS';
export const LOAD_ORDER_NOTIFICATION_FAILURE: 'LOAD_ORDER_NOTIFICATION_FAILURE' = 'LOAD_ORDER_NOTIFICATION_FAILURE';

export const SIGN_UP_SUCCESS: 'SIGN_UP_SUCCESS' = 'SIGN_UP_SUCCESS';
export const SIGN_UP_FAILURE: 'SIGN_UP_FAILURE' = 'SIGN_UP_FAILURE';

export const SIGN_IN_SUCCESS: 'SIGN_IN_SUCCESS' = 'SIGN_IN_SUCCESS';
export const SIGN_IN_FAILURE: 'SIGN_IN_FAILURE' = 'SIGN_IN_FAILURE';

export const SIGN_OUT_SUCCESS: 'SIGN_OUT_SUCCESS' = 'SIGN_OUT_SUCCESS';
export const SIGN_OUT_FAILURE: 'SIGN_OUT_FAILURE' = 'SIGN_OUT_FAILURE';

export const FORGOT_PASSWORD_SUCCESS: 'FORGOT_PASSWORD_SUCCESS' = 'FORGOT_PASSWORD_SUCCESS';
export const FORGOT_PASSWORD_FAILURE: 'FORGOT_PASSWORD_FAILURE' = 'FORGOT_PASSWORD_FAILURE';

export const RESET_PASSWORD_SUCCESS: 'RESET_PASSWORD_SUCCESS' = 'RESET_PASSWORD_SUCCESS';
export const RESET_PASSWORD_FAILURE: 'RESET_PASSWORD_FAILURE' = 'RESET_PASSWORD_FAILURE';

export const REFRESH_TOKEN_SUCCESS: 'REFRESH_TOKEN_SUCCESS' = 'REFRESH_TOKEN_SUCCESS';
export const REFRESH_TOKEN_FAILURE: 'REFRESH_TOKEN_FAILURE' = 'REFRESH_TOKEN_FAILURE';

export const GET_USER_SUCCESS: 'GET_USER_SUCCESS' = 'GET_USER_SUCCESS';
export const GET_USER_FAILURE: 'GET_USER_FAILURE' = 'GET_USER_FAILURE';
export const UPDATE_USER_SUCCESS: 'UPDATE_USER_SUCCESS' = 'UPDATE_USER_SUCCESS';
export const UPDATE_USER_FAILURE: 'UPDATE_USER_FAILURE' = 'UPDATE_USER_FAILURE';

export const CLEAR_ERROR: 'CLEAR_ERROR' = 'CLEAR_ERROR';

export const SET_ORDER_DETAILS: 'SET_ORDER_DETAILS' = 'SET_ORDER_DETAILS';
export const RESET_ORDER_DETAILS: 'RESET_ORDER_DETAILS' = 'RESET_ORDER_DETAILS';
export const LOAD_ORDER_DETAILS_REQUEST: 'LOAD_ORDER_DETAILS_REQUEST' = 'LOAD_ORDER_DETAILS_REQUEST';
export const LOAD_ORDER_DETAILS_SUCCESS: 'LOAD_ORDER_DETAILS_SUCCESS' = 'LOAD_ORDER_DETAILS_SUCCESS';
export const LOAD_ORDER_DETAILS_FAILURE: 'LOAD_ORDER_DETAILS_FAILURE' = 'LOAD_ORDER_DETAILS_FAILURE';

export interface LoadIngredientsSuccessAction {
    readonly type: typeof LOAD_INGREDIENTS_SUCCESS;
    readonly payload: Ingredient[];
}

export interface LoadIngredientsFailureAction {
    readonly type: typeof LOAD_INGREDIENTS_FAILURE;
    readonly payload: string;
}

export interface LoadIngredientsRequestAction {
    readonly type: typeof LOAD_INGREDIENTS_REQUEST;
}

export interface SetCurrentIngredientAction {
    readonly type: typeof SET_CURRENT_INGREDIENT;
    readonly payload: Ingredient | null;
}

export interface ResetCurrentIngredientAction {
    readonly type: typeof RESET_CURRENT_INGREDIENT;
}

export interface AddConstructorIngredientAction {
    readonly type: typeof ADD_CONSTRUCTOR_INGREDIENT;
    readonly payload: Ingredient;
}

export interface RemoveConstructorIngredientAction {
    readonly type: typeof REMOVE_CONSTRUCTOR_INGREDIENT;
    readonly payload: number;
}

export interface ReplaceConstructorBunsAction {
    readonly type: typeof REPLACE_CONSTRUCTOR_BUNS;
    readonly payload: Ingredient;
}

export interface SortConstructorIngredientsAction {
    readonly type: typeof SORT_CONSTRUCTOR_INGREDIENTS;
    readonly payload: {
        dragIndex: number;
        hoverIndex: number;
    };
}

export interface LoadOrderNotificationRequestAction {
    readonly type: typeof LOAD_ORDER_NOTIFICATION_REQUEST;
}

export interface LoadOrderNotificationSuccessAction {
    readonly type: typeof LOAD_ORDER_NOTIFICATION_SUCCESS;
    readonly payload: object;
}

export interface LoadOrderNotificationFailureAction {
    readonly type: typeof LOAD_ORDER_NOTIFICATION_FAILURE;
    readonly payload: string;
}

export interface SignUpSuccessAction {
    readonly type: typeof SIGN_UP_SUCCESS;
}

export interface SignUpFailureAction {
    readonly type: typeof SIGN_UP_FAILURE;
    readonly payload: string;
}

export interface SignInSuccessAction {
    readonly type: typeof SIGN_IN_SUCCESS;
}

export interface SignInFailureAction {
    readonly type: typeof SIGN_IN_FAILURE;
    readonly payload: string;
}

export interface SignOutSuccessAction {
    readonly type: typeof SIGN_OUT_SUCCESS;
}

export interface SignOutFailureAction {
    readonly type: typeof SIGN_OUT_FAILURE;
    readonly payload: string;
}

export interface ForgotPasswordSuccessAction {
    readonly type: typeof FORGOT_PASSWORD_SUCCESS;
}

export interface ForgotPasswordFailureAction {
    readonly type: typeof FORGOT_PASSWORD_FAILURE;
    readonly payload: string;
}

export interface ResetPasswordSuccessAction {
    readonly type: typeof RESET_PASSWORD_SUCCESS;
}

export interface ResetPasswordFailureAction {
    readonly type: typeof RESET_PASSWORD_FAILURE;
    readonly payload: string;
}

export interface RefreshTokenSuccessAction {
    readonly type: typeof REFRESH_TOKEN_SUCCESS;
    readonly payload: string;
}

export interface RefreshTokenFailureAction {
    readonly type: typeof REFRESH_TOKEN_FAILURE;
    readonly payload: string;
}

export interface GetUserSuccessAction {
    readonly type: typeof GET_USER_SUCCESS;
    readonly payload: User;
}

export interface GetUserFailureAction {
    readonly type: typeof GET_USER_FAILURE;
    readonly payload: string;
}

export interface UpdateUserSuccessAction {
    readonly type: typeof UPDATE_USER_SUCCESS;
    readonly payload: User;
}

export interface UpdateUserFailureAction {
    readonly type: typeof UPDATE_USER_FAILURE;
    readonly payload: string;
}

export interface ClearErrorAction {
    readonly type: typeof CLEAR_ERROR;
}

export interface SetOrderDetailsAction {
    readonly type: typeof SET_ORDER_DETAILS;
    readonly payload: OrderData | null;
}

export interface ResetOrderDetailsAction {
    readonly type: typeof RESET_ORDER_DETAILS;
}

export interface LoadOrderDetailsRequestAction {
    readonly type: typeof LOAD_ORDER_DETAILS_REQUEST;
}

export interface LoadOrderDetailsSuccessAction {
    readonly type: typeof LOAD_ORDER_DETAILS_SUCCESS;
    readonly payload: object;
}

export interface LoadOrderDetailsFailureAction {
    readonly type: typeof LOAD_ORDER_DETAILS_FAILURE;
    readonly payload: string;
}

export type AppActionTypes =
    | LoadIngredientsSuccessAction
    | LoadIngredientsFailureAction
    | LoadIngredientsRequestAction
    | SetCurrentIngredientAction
    | ResetCurrentIngredientAction
    | AddConstructorIngredientAction
    | RemoveConstructorIngredientAction
    | ReplaceConstructorBunsAction
    | SortConstructorIngredientsAction
    | LoadOrderNotificationRequestAction
    | LoadOrderNotificationSuccessAction
    | LoadOrderNotificationFailureAction
    | SignUpSuccessAction
    | SignUpFailureAction
    | SignInSuccessAction
    | SignInFailureAction
    | SignOutSuccessAction
    | SignOutFailureAction
    | ForgotPasswordSuccessAction
    | ForgotPasswordFailureAction
    | ResetPasswordSuccessAction
    | ResetPasswordFailureAction
    | RefreshTokenSuccessAction
    | RefreshTokenFailureAction
    | GetUserSuccessAction
    | GetUserFailureAction
    | UpdateUserSuccessAction
    | UpdateUserFailureAction
    | ClearErrorAction
    | SetOrderDetailsAction
    | ResetOrderDetailsAction
    | LoadOrderDetailsRequestAction
    | LoadOrderDetailsSuccessAction
    | LoadOrderDetailsFailureAction;


export const WS_CONNECTION_START: 'WS_CONNECTION_START' = 'WS_CONNECTION_START';
export const WS_CONNECTION_SUCCESS: 'WS_CONNECTION_SUCCESS' = 'WS_CONNECTION_SUCCESS';
export const WS_CONNECTION_ERROR: 'WS_CONNECTION_ERROR' = 'WS_CONNECTION_ERROR';
export const WS_CONNECTION_CLOSED: 'WS_CONNECTION_CLOSED' = 'WS_CONNECTION_CLOSED';
export const WS_GET_MESSAGE: 'WS_GET_MESSAGE' = 'WS_GET_MESSAGE';

export interface WSConnectionStartAction {
    readonly type: typeof WS_CONNECTION_START;
    readonly payload: string;
}

export interface WSConnectionSuccessAction {
    readonly type: typeof WS_CONNECTION_SUCCESS;
}

export interface WSConnectionErrorAction {
    readonly type: typeof WS_CONNECTION_ERROR;
    readonly payload: Event;
}

export interface WSGetMessageAction {
    readonly type: typeof WS_GET_MESSAGE;
    readonly payload: any;
}

export interface WSConnectionClosedAction {
    readonly type: typeof WS_CONNECTION_CLOSED;
}

export type WSActionTypes =
    | WSConnectionStartAction
    | WSConnectionSuccessAction
    | WSConnectionErrorAction
    | WSGetMessageAction
    | WSConnectionClosedAction;

export type ActionTypes = AppActionTypes | WSActionTypes;