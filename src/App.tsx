import { Route, Switch } from "react-router-dom";
import Agenda from "./components/Agenda";

import Content from "./components/Content";
import Login from "./components/Login";
import Navbar from "./components/Navbar";

function App() {
  return (
    <div className="">
      <Navbar />
      <Switch>
        <Route path="/" exact>
          <Content />
        </Route>
        <Route path="/login" exact>
          <div className="container mx-auto flex">
            <Agenda />
            <Login />
          </div>
        </Route>
      </Switch>
    </div>
  );
}

export default App;
