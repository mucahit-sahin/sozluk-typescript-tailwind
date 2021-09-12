import api from "../../api";
import { Auth, AuthDispatch, User } from "../../types/auth";
import setAuthToken from "../../utils/setAuthToken";


export const login = ({ email, password }: { email: string; password: string;}) => async (dispatch: AuthDispatch) => {
    dispatch({ type: "LOGIN_START" });
    try {
      const response = await api.post("/user/signin", { email, password });
      dispatch({ type: "LOGIN_SUCCESS", payload: response.data });
      localStorage.setItem("token", response.data.token);
      dispatch(loadUser());
    } catch {
      dispatch({ type: "LOGIN_ERROR" });
    }
};

export const register = ({ email, password,birtdate,username }: { email: string; password: string;birtdate: Date;username: string;}) => async (dispatch: AuthDispatch) => {
    dispatch({ type: "REGISTER_START" });
    try {
        const response = await api.post<Auth>("/user/signup", { email, password,birtdate,username  });
      dispatch({ type: "REGISTER_SUCCESS", payload: response.data });
      localStorage.setItem("token", response.data.token);
      dispatch(loadUser());
    } catch {
      dispatch({ type: "REGISTER_ERROR" });
    }
};

export const loadUser = () => async (dispatch:AuthDispatch) => {
  try {
    setAuthToken();
    const response = await api.get<User>("/user/auth");
    dispatch({
      type: "USER_LOADED",
      payload: response.data,
    });
  } catch (err) {
    dispatch({
      type: "AUTH_ERROR",
    });
  }
};
export const logout = () => (dispatch: AuthDispatch) => {
    localStorage.removeItem("token");
    dispatch({ type: "LOGOUT" });
};