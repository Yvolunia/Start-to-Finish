import React from "react";
import { Link } from "react-router-dom";
import "./nav.css";

const Nav = props => (
  <nav className="navbar navbar-light" style={{backgroundColor: "#e3f2fd"}}>
  <Link className="navbar-brand" to="/">
  	<img src="../src 1.01.51 AM/start2finishLOGO.png" width="102.5px" height="50px"/>
  	</Link>
  <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
    <span className="navbar-toggler-icon"></span>
  </button>
  <div className="collapse navbar-collapse" id="navbarNav">
    <ul className="navbar-nav">
      <li className={window.location.pathname === "/home" ? "active" : ""}>
          <Link to="/home">Home</Link>
        </li>
      <li className={window.location.pathname === "/signup" ? "active" : ""}>
          <Link to="/signup">Sign Up</Link>
        </li>
      <li className={window.location.pathname === "/adult" ? "active" : ""}>
          <Link to="/adult">Adult SetUp</Link>
        </li>
      <li className={window.location.pathname === "/tracker" ? "active" : ""}>
          <Link to="/tracker">Adult Tracker</Link>
        </li>
      <li className={window.location.pathname === "/child" ? "active" : ""}>
          <Link to="/child">Kid Home</Link>
        </li>
      <li className={window.location.pathname === "/profile" ? "active" : ""}>
          <Link to="/profile">Kid Profile</Link>
        </li>
    </ul>
  </div>
</nav>
);




export default Nav;

