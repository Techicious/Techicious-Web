import { combineReducers } from "redux";
import controlsReducer from "./controls/reducer";


export const reducers = combineReducers({

  CONTROLS: controlsReducer,
 
});
