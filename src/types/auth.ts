import { ThunkDispatch } from "redux-thunk";

export interface AuthState {
    user: User;
    loading: boolean;
    error: string;
}
  
export interface User{
    username?: string;
    email?: string;
    password?:string;
    birtdate?: string;
    id?: string;
}

// actions
interface LOGIN_START {
    type: "LOGIN_START";
}
  
interface LOGIN_SUCCESS {
    type: "LOGIN_SUCCESS";
    payload: User;
}
  
interface LOGIN_ERROR {
    type: "LOGIN_ERROR";
}

interface REGISTER_START {
    type: "REGISTER_START";
}
  
interface REGISTER_SUCCESS {
    type: "REGISTER_SUCCESS";
    payload: User;
}
  
interface REGISTER_ERROR {
    type: "REGISTER_ERROR";
}

interface AUTH_START {
    type: "AUTH_START";
}
  
interface AUTH_SUCCESS {
    type: "AUTH_SUCCESS";
    payload: User;
}
  
interface AUTH_ERROR {
    type: "AUTH_ERROR";
}

interface IS_LOGGED_SUCCESS {
    type: "IS_LOGGED_SUCCESS";
    payload: User;
}

interface LOGOUT {
    type: "LOGOUT";
}

export type AuthAction = LOGIN_START | LOGIN_SUCCESS | LOGIN_ERROR|REGISTER_ERROR|REGISTER_START|REGISTER_SUCCESS|AUTH_ERROR|AUTH_START|AUTH_SUCCESS|LOGOUT|IS_LOGGED_SUCCESS

export type AuthDispatch = ThunkDispatch<
    AuthState,
  void,
  AuthAction
>;