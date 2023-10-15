import { combineReducers } from "redux";
import handleReducer from "./detailProduct";

export const rootReducer = combineReducers({
  app: handleReducer
})

