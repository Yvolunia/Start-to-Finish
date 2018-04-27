import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Parent from "./pages/Parent";
import Login from "./pages/Login";
import Child from "./pages/Child";
import Nav from "./components/Nav";

const App = () => (
  <Router>
    <div>
      <Nav />
      <Switch>
        <Route exact path="/" component={Parent} />
        <Route exact path="/parent" component={Parent} />
      </Switch>
    </div>
  </Router>
);

export default App;
