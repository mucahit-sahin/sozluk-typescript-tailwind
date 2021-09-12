import { useSelector } from "react-redux";
import { Redirect, Route } from "react-router";
import { AppState } from "../store";
type Props = {
  path: string;
  exact?: boolean;
};
const AuthRoute: React.FC<Props> = ({ path, exact, children }) => {
  const { user } = useSelector((state: AppState) => state.auth);
  return (
    <Route path={path} exact={exact && true}>
      {user.username ? <Redirect to="/" /> : children}
    </Route>
  );
};

export default AuthRoute;
