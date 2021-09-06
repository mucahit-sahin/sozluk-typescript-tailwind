import { Route, Switch } from "react-router-dom";
import Agenda from "./components/Agenda";

import Content from "./components/Content";
import Login from "./components/Login";
import Navbar from "./components/Navbar";
import Signup from "./components/Signup";

function App() {
  return (
    <div className="">
      <Navbar />
      <Switch>
        <Route path="/" exact>
          <Content />
        </Route>
        <Route path="/login">
          <div className="container mx-auto flex">
            <Agenda />
            <Login />
          </div>
        </Route>
        <Route path="/signup">
          <div className="container mx-auto flex">
            <Agenda />
            <Signup />
          </div>
        </Route>
      </Switch>
    </div>
  );
}

export default App;
