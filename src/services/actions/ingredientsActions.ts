// src/services/actions/ingredientsActions.ts
import { ThunkAction } from 'redux-thunk';
import { InitialState } from '../initialState';
import { Action } from 'redux';
import {
    LOAD_INGREDIENTS_REQUEST,
    LOAD_INGREDIENTS_SUCCESS,
    LOAD_INGREDIENTS_FAILURE
} from './types';
import Ingredient from "../../interfaces/ingredient";

export const loadIngredientsRequest = () => {
    return {
        type: LOAD_INGREDIENTS_REQUEST,
    };
};

export const loadIngredientsSuccess = (ingredients: Ingredient[]) => {
    return {
        type: LOAD_INGREDIENTS_SUCCESS,
        payload: ingredients,
    };
};

export const loadIngredientsFailure = (error: Error) => { // Указываем тип Error
    return {
        type: LOAD_INGREDIENTS_FAILURE,
        payload: error.message,
    };
};

export const fetchIngredients = (): ThunkAction<void, InitialState, unknown, Action<string>> => async (dispatch) => {
    dispatch(loadIngredientsRequest());
    try {
        const response = await fetch('https://norma.nomoreparties.space/api/ingredients');

        if (!response.ok) {
            throw new Error('Failed to fetch ingredients');
        }
        const {data} = await response.json();

        dispatch(loadIngredientsSuccess(data));
    } catch (error: any) {
        dispatch(loadIngredientsFailure(error.message));
    }
};