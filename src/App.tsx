import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { Switch } from "react-router-dom";
import { Route } from "react-router";

import Agenda from "./components/Agenda";
import Content from "./components/Content";
import Login from "./components/Login";
import Navbar from "./components/Navbar";
import Signup from "./components/Signup";
import Topic from "./components/Topic";
import { loadUser } from "./store/actions/authActions";
import AuthRoute from "./components/AuthRoute";
function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(loadUser());
  }, [dispatch]);

  return (
    <div className="">
      <Navbar />
      <Switch>
        <Route path="/" exact>
          <Content />
        </Route>
        <AuthRoute path="/login">
          <div className="container mx-auto flex">
            <Agenda />
            <Login />
          </div>
        </AuthRoute>
        <AuthRoute path="/signup">
          <div className="container mx-auto flex">
            <Agenda />
            <Signup />
          </div>
        </AuthRoute>
        <Route path="/:id">
          <div className="container mx-auto flex">
            <Agenda />
            <Topic />
          </div>
        </Route>
      </Switch>
    </div>
  );
}

export default App;
