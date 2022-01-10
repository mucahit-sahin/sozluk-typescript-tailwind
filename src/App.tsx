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
import Ads from "./components/Ads";
function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(loadUser());
    if (localStorage.theme === undefined) {
      localStorage.theme = "light";
    }
    if (
      localStorage.theme === "dark" ||
      (!("theme" in localStorage) &&
        window.matchMedia("(prefers-color-scheme: dark)").matches)
    ) {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  }, [dispatch]);

  return (
    <div className="dark:bg-gray-900 ">
      <Navbar />
      <div className="container mx-auto max-w-7xl flex">
        <Agenda />
        <Switch>
          <Route path="/" exact>
            <Content />
          </Route>
          <AuthRoute path="/login">
            <Login />
          </AuthRoute>
          <AuthRoute path="/signup">
            <Signup />
          </AuthRoute>
          <Route path="/:id">
            <Topic />
          </Route>
        </Switch>
        <Ads />
      </div>
    </div>
  );
}

export default App;
