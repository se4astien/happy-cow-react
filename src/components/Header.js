import React from "react";
import { Link } from "react-router-dom";
// Css
import "../css/App.css";
// Images
import logo from "../images/logo-happycow.png";

export default function Header() {
  return (
    <header>
      <ul className="menu">
        <li className="submenu">
          <ul>
            <li>
              <Link to="/">
                <img src={logo} alt="logo HappyCow" />
              </Link>
            </li>
            <li>
              <Link to="#">Restaurants & stores</Link>
            </li>
            <li>
              <Link to="#">Veg topcis</Link>
            </li>
            <li>
              <Link to="#">Recips</Link>
            </li>
            <li>
              <Link to="#">Feed the cow</Link>
            </li>
          </ul>
        </li>

        <li className="member center">
          <ul>
            <li>
              <Link to="#" className="btn btn-white">
                Add listing
              </Link>
            </li>
            <li>
              <Link to="#" className="btn btn-purple">
                Login / Join
              </Link>
            </li>
          </ul>
        </li>
      </ul>
    </header>
  );
}
