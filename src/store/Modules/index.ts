import { combineReducers } from "@reduxjs/toolkit";
import counterReducer from "./Counter";

export const combinedReducer = combineReducers({
  ...counterReducer,
});