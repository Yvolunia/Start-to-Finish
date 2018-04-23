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
        <Route exact path="/" component={parent} />
        <Route exact path="/parent" component={parent} />
        <Route exact path="/parent/:id" component={Detail} />
        <Route component={NoMatch} />
      </Switch>
    </div>
  </Router>
);

export default App;
