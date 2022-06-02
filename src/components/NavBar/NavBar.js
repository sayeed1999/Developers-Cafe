import React from "react";
import { Link } from "react-router-dom";
import AppRoutes from "../../constants/AppRoutes";
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
          <Link exact to={AppRoutes.ChitChat} style={{ color: "#fff" }}>
            Chit-Chat!
          </Link>
        </span>
        <span>
          <Link exact to={AppRoutes.Caffe} style={{ color: "#fff" }}>
            Order Food!
          </Link>
        </span>
        <span>
          <Link exact to={AppRoutes.Quiz} style={{ color: "#fff" }}>
            Quiz!
          </Link>
        </span>
        <span style={{ marginLeft: "auto" }}>
          <Link exact to={AppRoutes.Signup} style={{ color: "#fff" }}>
            Signup
          </Link>
        </span>
        <span>
          <Link exact to={AppRoutes.Login} style={{ color: "#fff" }}>
            Login
          </Link>
        </span>
      </nav>
      <div className="spacerBelowNavbar"></div>
    </>
  );
};

export default NavBar;
