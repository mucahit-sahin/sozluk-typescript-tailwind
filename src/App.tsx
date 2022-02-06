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
        <Agenda className="hidden lg:block w-1/5 sticky top-28 z-0 mt-4 overflow-y-auto pr-4" />
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
          <Route path="/agenda">
            <Agenda className="mt-4 pr-4 w-full lg:w-3/5 flex flex-col" />
          </Route>
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
