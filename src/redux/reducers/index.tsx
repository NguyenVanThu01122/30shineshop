import { combineReducers } from "redux";
import handleReducer from "./detailProduct";

const rootReducer = combineReducers({
  app: handleReducer
})
export default rootReducer;