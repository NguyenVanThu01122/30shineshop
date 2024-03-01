import { combineReducers } from "redux";
import handleReducer from "./app";

export const rootReducer = combineReducers({
  app: handleReducer
})

