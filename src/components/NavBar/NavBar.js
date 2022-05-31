import React from "react";
import "./NavBar.css";

class NavBar extends React.Component {
  state = {};

  render() {
    return (
      <>
        <nav className="navbar bg-light px-2">
          <span className="app-title"> Problem Solver's Caffe! </span>
        </nav>
        <div className="spacerBelowNavbar"></div>
      </>
    );
  }
}

export default NavBar;
