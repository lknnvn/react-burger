// src/services/actions/ingredientsActions.ts
import {ThunkAction} from 'redux-thunk';
import {InitialState} from '../initialState';
import {Action} from 'redux';
import {
    LOAD_INGREDIENTS_REQUEST,
    LOAD_INGREDIENTS_SUCCESS,
    LOAD_INGREDIENTS_FAILURE
} from './types';
import Ingredient from "../../interfaces/ingredient";
import fetchData from "../../utils/fetchData";

const BASE_URL = process.env.REACT_APP_BASE_URL;

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

export const loadIngredientsFailure = (error: Error) => {
    return {
        type: LOAD_INGREDIENTS_FAILURE,
        payload: error.message,
    };
};

export const fetchIngredients = (): ThunkAction<void, InitialState, unknown, Action<string>> => async (dispatch) => {
    dispatch(loadIngredientsRequest());
    try {
        const {data} = await fetchData(`${BASE_URL}/ingredients`);

        dispatch(loadIngredientsSuccess(data));
    } catch (error: any) {
        dispatch(loadIngredientsFailure(error.message));
    }
};