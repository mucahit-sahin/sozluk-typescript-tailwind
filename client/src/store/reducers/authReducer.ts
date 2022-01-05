import { AuthAction, AuthState, User} from "../../types/auth";

const defaultState: AuthState = {
    user: {} as User,
    token: localStorage.getItem("token")?.toString()||"",
    loading: false,
    error: ""
};

const authReducer = (state:AuthState=defaultState,action:AuthAction) => {
    switch (action.type) {
        case "LOGIN_START":
        case "REGISTER_START":
            return {...state,loading:true,token:"",error: ""};
        case "LOGIN_SUCCESS":
        case "REGISTER_SUCCESS":
            return { ...state,token:action.payload.token.toString(), loading: false};
        case "LOGIN_ERROR":
        case "REGISTER_ERROR":
            return { ...state, loading: false,token:"",user: {} as User, error: "Auth Failed" };
        case "USER_LOADED":
            return { ...state, user: action.payload, loading: false };
        case "AUTH_ERROR":
            return { ...state, user: {} as User};
        case "LOGOUT":
            return { ...state, user: {} as User,token:"" ,loading:false};
        default:
          return state;
      }
}

export default authReducer
