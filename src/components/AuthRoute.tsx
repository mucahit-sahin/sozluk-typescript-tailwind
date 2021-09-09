import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Redirect, Route } from "react-router";
import { AppState } from "../store";
import { isLoggedIn } from "../store/actions/authActions";
type Props = {
  path: string;
  exact?: boolean;
};
const AuthRoute: React.FC<Props> = ({ path, exact, children }) => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(isLoggedIn());
  }, [dispatch]);

  const { user } = useSelector((state: AppState) => state.auth);
  return (
    <Route path={path} exact>
      {user.username ? children : <Redirect to="/" />}
    </Route>
  );
};

export default AuthRoute;
