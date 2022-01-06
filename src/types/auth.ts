import { ThunkDispatch } from "redux-thunk";

export interface AuthState {
    user: User;
    token: string;
    loading: boolean;
    error: string;
}

export interface User{
    username: string;
    email: string;
    password:string;
    birtdate: string;
    id: string;
}

export interface Auth{
    token: string;
}

// actions
interface LOGIN_START {
    type: "LOGIN_START";
}
  
interface LOGIN_SUCCESS {
    type: "LOGIN_SUCCESS";
    payload: Auth;
}
  
interface LOGIN_ERROR {
    type: "LOGIN_ERROR";
}

interface REGISTER_START {
    type: "REGISTER_START";
}
  
interface REGISTER_SUCCESS {
    type: "REGISTER_SUCCESS";
    payload: Auth;
}
  
interface REGISTER_ERROR {
    type: "REGISTER_ERROR";
}

interface AUTH_ERROR {
    type: "AUTH_ERROR";
}

interface USER_LOADED {
    type: "USER_LOADED";
    payload: User;
}

interface LOGOUT {
    type: "LOGOUT";
}

export type AuthAction = LOGIN_START | LOGIN_SUCCESS | LOGIN_ERROR|REGISTER_ERROR|REGISTER_START|REGISTER_SUCCESS|AUTH_ERROR|LOGOUT|USER_LOADED

export type AuthDispatch = ThunkDispatch<
    AuthState,
  void,
  AuthAction
>;