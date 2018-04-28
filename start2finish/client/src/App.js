import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Parent from "./pages/Parent Mission Set Up";
import Login from "./pages/Login";
import Child from "./pages/Kid Home";
import Signup from "./pages/Sign Up";
import Tracker from "./pages/Parent Tracker";
import Home from "./pages/HomeScreen";
import Nav from "./components/Nav";

const App = () => (
  <Router>
    <div>
      <Nav />
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/signup" component={Signup} />
        <Route exact path="/parent" component={Parent} />
        <Route exact path="/tracker" component={Tracker} />
        <Route exact path="/child" component={Child} />
        <Route exact path="/profile" component={Profile} />      
      </Switch>
    </div>
  </Router>
);

export default App;
