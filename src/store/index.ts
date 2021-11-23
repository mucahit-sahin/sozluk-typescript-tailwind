import { combineReducers } from "redux";
import { AgendaState } from "../types/agenda";
import { AuthState } from "../types/auth";
import { PostState } from "../types/post";
import agendaReducer from "./reducers/agendaReducer";
import authReducer from "./reducers/authReducer";
import postReducer from "./reducers/postReducer";

export interface AppState {
  auth: AuthState;
  post: PostState;
  agenda: AgendaState;
}

const rootReducer = combineReducers<AppState>({auth:authReducer,post:postReducer,agenda:agendaReducer});

export default rootReducer;