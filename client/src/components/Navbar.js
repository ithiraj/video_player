import "./Navbar.css";
import { Link, useHistory } from "react-router-dom";
import React, { useContext } from "react";
import axios from "axios";
import AuthService from "../auth/services";
import { UserContext } from "../auth/config/AuthContext";

const Navbar = ({ click }) => {
  const history = useHistory();
  const { setLoggedIn, loggedIn } = useContext(UserContext);
  const onclick = async () => {
    try {
      await AuthService.logout();
      setLoggedIn(false);
      history.push("/login");
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <>
      <nav className="navbar">
        <div className="navbar_logo">
          <h2>Logo</h2>
        </div>
        <ul className="navbar_link">
          {loggedIn === false && (
            <li>
              <Link to="/register">Register</Link>
            </li>
          )}

          {loggedIn === false && (
            <li>
              <Link to="/Login">Login</Link>
            </li>
          )}

          {loggedIn === true && (
            <li onClick={() => onclick()}>
              <Link to="/Logout" onClick={onclick}>
                Logout
              </Link>
            </li>
          )}
        </ul>
      </nav>
    </>
  );
};

export default Navbar;
