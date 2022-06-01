import React from "react";
import "./NavBar.css";

const NavBar = (props) => {
  return (
    <>
      <nav className="navbar bg-light d-flex justify-content-start">
        <span className="app-title"> Problem Solver's Caffe! </span>
        <span style={{ color: "royalblue", fontWeight: "bold" }}>
          Chit-Chat!
        </span>
        <span style={{ color: "green", fontWeight: "bold" }}>Order Food!</span>
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
