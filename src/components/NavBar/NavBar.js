import React from "react";
import { Link } from "react-router-dom";
import "./NavBar.css";

const NavBar = (props) => {
  return (
    <>
      <nav className="navbar bg-success d-flex justify-content-start">
        <span className="app-title">
          <Link exact to="/" style={{ textDecoration: "none", color: "#fff" }}>
            Problem Solver's Caffe!
          </Link>
        </span>
        <span>
          <Link exact to="/chit-chat" style={{ color: "#fff" }}>
            Chit-Chat!
          </Link>
        </span>
        <span>
          <Link exact to="/caffe" style={{ color: "#fff" }}>
            Order Food!
          </Link>
        </span>
        <span>
          <Link exact to="/quiz" style={{ color: "#fff" }}>
            Quiz!
          </Link>
        </span>
        <span
          style={{ marginLeft: "auto", fontStyle: "italic", color: "#fff" }}
        >
          Welcome, guest!
        </span>
      </nav>
      <div className="spacerBelowNavbar"></div>
    </>
  );
};

export default NavBar;
