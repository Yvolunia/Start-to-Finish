import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Missions from "./pages/MissionSetUp";
import Profiles from "./pages/KidProfile";
// import Login from "./pages/Login";
import Kids from "./pages/KidHome";
// import Signup from "./pages/SignUp";
// import Tracker from "./pages/AdultTracker";
// import Home from "./pages/HomeScreen";
// import Nav from "./components/Nav";


const App = () => (
  <Router>
    <div>
      {/* <Nav /> */}
      <Switch>
        <Route exact path="/" component={Profiles} />
        <Route exact path="/profile" component={Profiles} />
        <Route exact path="/missions/:id" component={Missions} />
        <Route exact path="/kid" component={Kids} />
        {/* <Route exact path="/SignUp" component={SignUp} /> */}
        <Route exact path="/missions" component={Missions} />
        {/* <Route exact path="/Tracker" component={Tracker} />
        <Route exact path="/kid" component={Kid} /> */}
            
      </Switch>
    </div>
  </Router>
);

export default App;
