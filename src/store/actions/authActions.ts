import api from "../../api";
import { AuthDispatch, User } from "../../types/auth";


export const login = ({ email, password }: { email: string; password: string;}) => async (dispatch: AuthDispatch) => {
    dispatch({ type: "LOGIN_START" });
    try {
        const response = await api.post<User>("/user/signin", { email, password });
      dispatch({ type: "LOGIN_SUCCESS", payload: response.data });
      localStorage.setItem("user", JSON.stringify(response.data));
    } catch {
      dispatch({ type: "LOGIN_ERROR" });
    }
};

export const register = ({ email, password,birtdate,username }: { email: string; password: string;birtdate: Date;username: string;}) => async (dispatch: AuthDispatch) => {
    dispatch({ type: "REGISTER_START" });
    try {
        const response = await api.post<User>("/user/signup", { email, password,birtdate,username  });
      dispatch({ type: "REGISTER_SUCCESS", payload: response.data });
      localStorage.setItem("user", JSON.stringify(response.data) );
    } catch {
      dispatch({ type: "REGISTER_ERROR" });
    }
};

export const isLoggedIn = () => async (dispatch: AuthDispatch) => {
  const user = JSON.parse(localStorage.getItem("user") || "");
  dispatch({ type: "IS_LOGGED_SUCCESS" ,payload:user});
};
  
export const logout = () => (dispatch: AuthDispatch) => {
    localStorage.removeItem("user");
    dispatch({ type: "LOGOUT" });
};