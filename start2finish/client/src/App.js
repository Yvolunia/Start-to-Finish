import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Adult from "./pages/MissionSetUp";
import Kid from "./pages/KidProfile";
// import Login from "./pages/Login";
import Mission from "./pages/KidHome";
// import Signup from "./pages/SignUp";
// import Tracker from "./pages/AdultTracker";
// import Home from "./pages/HomeScreen";
// import Nav from "./components/Nav";


const App = () => (
  <Router>
    <div>
      {/* <Nav /> */}
      <Switch>
        <Route exact path="/" component={Adult} />
        <Route exact path="/" component={Kid} />
        <Route exact path="/" component={Mission} />
        {/* <Route exact path="/SignUp" component={SignUp} /> */}
        <Route exact path="/Adult" component={Adult} />
        {/* <Route exact path="/Tracker" component={Tracker} />
        <Route exact path="/kid" component={Kid} /> */}
            
      </Switch>
    </div>
  </Router>
);

export default App;
