import { combineReducers } from "redux";
import { AuthState } from "../types/auth";
import authReducer from "./reducers/authReducer";

export interface AppState {
  auth: AuthState;
}

const rootReducer = combineReducers<AppState>({auth:authReducer});

export default rootReducer;