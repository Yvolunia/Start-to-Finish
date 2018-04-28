import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import TodoItems from './pages/Parent Mission Set Up/parent';
// import Parent from "./pages/Parent";
// import Login from "./pages/Login";
// import Child from "./pages/Child";
// import Sign
// import Nav from "./components/Nav";

// const App = () => (
//   <Router>
//     <div>
//       <Nav />
//       <Switch>
//         <Route exact path="/" component={Home} />
//         <Route exact path="/signup" component={Signup} />
//         <Route exact path="/parent" component={Parent} />
//         <Route exact path="/tracker" component={Tracker} />
//         <Route exact path="/child" component={Child} />
//         <Route exact path="/profile" component={Profile} />      
//       </Switch>
//     </div>
//   </Router>
// );

const App = () => (
  <Router>
    <div>
        <Route exact path="/todo" component={TodoItems}/>
    </div>
  </Router>
);

export default App;
