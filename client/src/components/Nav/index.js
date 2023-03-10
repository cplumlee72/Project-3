import React from "react";
import Auth from "../../utils/auth";
import { Link } from "react-router-dom";

function Nav() {

  function showNavigation() {
    if (Auth.loggedIn()) {
      return (
        <ul className="flex-row nav-con">

          <li className="mx-1">
            {/* this is not using the Link component to logout or user and then refresh the application to the start */}
            <a href="/" onClick={() => Auth.logout()}>
              Logout
            </a>
          </li>
        </ul>
      );
    } else {
      return (
        <ul className="flex-row">
          <li className="mx-1 nav-item">
            <Link to="/signup">
              Signup
            </Link>
          </li>
          <li className="mx-1 nav-item">
            <Link to="/login">
              Login
            </Link>
          </li>
          <li className="mx-1 nav-item">
            <Link to="/clubs">
              View Clubs
            </Link>
          </li>
        </ul>
      );
    }
  }

  return (
    <header className="flex-row px-1 mx-1 nav-con">
      <h1>
        <Link to="/">
          <span role="img" aria-label="shopping bag">📖</span>
          OpenBook
        </Link>
      </h1>

      <nav>
        {showNavigation()}
      </nav>
    </header>
  );
}

export default Nav;
