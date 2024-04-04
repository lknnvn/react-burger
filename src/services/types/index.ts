import store from "../store";
import {ThunkAction, ThunkDispatch} from "redux-thunk";
import {ActionTypes} from "./actions";

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = ThunkDispatch<RootState, unknown, ActionTypes>;