import {
  applyMiddleware,
  combineReducers,
  createStore,
} from "@reduxjs/toolkit";
import authReducer from "./auth/reducer";
import thunk from "redux-thunk";
import { TypedUseSelectorHook, useSelector } from "react-redux";

const rootReducer = combineReducers({
  auth: authReducer,
});

export const store = createStore(rootReducer, applyMiddleware(thunk));

export type RootState = ReturnType<typeof rootReducer>;

export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;
