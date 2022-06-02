import React, { useContext } from "react";
import { Link } from "react-router-dom";
import AppRoutes from "../../constants/AppRoutes";
import { AuthContext } from "../../contexts/AuthContext";
import "./NavBar.css";

const NavBar = (props) => {
  const { isUserAuthenticated, logout } = useContext(AuthContext);

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
        <span className="flex-grow-1"></span>
        {!isUserAuthenticated && (
          <span>
            <Link exact to={AppRoutes.Signup} style={{ color: "#fff" }}>
              Signup
            </Link>
          </span>
        )}
        {!isUserAuthenticated && (
          <span>
            <Link exact to={AppRoutes.Login} style={{ color: "#fff" }}>
              Login
            </Link>
          </span>
        )}
        {isUserAuthenticated && (
          <span
            style={{
              color: "#fff",
              textDecoration: "underline",
              cursor: "pointer",
            }}
          >
            <a onClick={() => logout()}>Logout</a>
          </span>
        )}
      </nav>
      <div className="spacerBelowNavbar"></div>
    </>
  );
};

export default NavBar;
