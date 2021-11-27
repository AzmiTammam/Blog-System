import React from "react";
import { Link } from "react-router-dom"

function Header(props) {
  return (
    <nav className="CustomNavbar">
      <ul>
        <li>
          <Link to="/" >Home</Link>
        </li>
        <li id="hideAfterLogin">
        <Link to="/login" >Sign in</Link>
        </li>
        <li id="hideAfterLogin1">
        <Link to="/register" >Sign up</Link>
        </li>
        <li id="navUserName">
        </li>
      </ul>
    </nav>
  );
}


export default Header;