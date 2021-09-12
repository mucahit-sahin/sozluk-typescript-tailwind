import { combineReducers } from "redux";
import { AuthState } from "../types/auth";
import { PostState } from "../types/post";
import authReducer from "./reducers/authReducer";
import postReducer from "./reducers/postReducer";

export interface AppState {
  auth: AuthState;
  post: PostState;
}

const rootReducer = combineReducers<AppState>({auth:authReducer,post:postReducer});

export default rootReducer;