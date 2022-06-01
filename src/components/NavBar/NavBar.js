import React from "react";
import { Link } from "react-router-dom";
import "./NavBar.css";

const NavBar = (props) => {
  return (
    <>
      <nav className="navbar bg-light d-flex justify-content-start">
        <span className="app-title">
          <Link exact to="/">
            Problem Solver's Caffe!
          </Link>
        </span>
        <span style={{ color: "royalblue" }}>
          <Link exact to="/chit-chat">
            Chit-Chat!
          </Link>
        </span>
        <span style={{ color: "green" }}>
          <Link exact to="/caffe">
            Order Food!
          </Link>
        </span>
        <span
          style={{ marginLeft: "auto", fontStyle: "italic", color: "magenta" }}
        >
          <span style={{ fontWeight: "bold" }}>Welcome</span>, guest!
        </span>
      </nav>
      <div className="spacerBelowNavbar"></div>
    </>
  );
};

export default NavBar;
