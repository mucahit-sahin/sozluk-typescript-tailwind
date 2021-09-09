import { AuthAction, AuthState } from "../../types/auth";

const defaultState: AuthState = { user:  {} ,loading:false,error:""}

const authReducer = (state:AuthState=defaultState,action:AuthAction) => {
    switch (action.type) {
        case "LOGIN_START":
        case "REGISTER_START":
            return {...state,loading:true};
        case "LOGIN_SUCCESS":
        case "REGISTER_SUCCESS":
        case "IS_LOGGED_SUCCESS":
            return { ...state,user:action.payload, loading: false };
        case "LOGIN_ERROR":
        case "REGISTER_ERROR":
            return { ...state, loading: false, error: "Auth Failed" };
        case "LOGOUT":
            return { ...state, user: {} ,error:"" ,loading:false};
        default:
          return state;
      }
}

export default authReducer
