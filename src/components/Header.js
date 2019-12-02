import React from "react";
import "../css/App.css";
import logo from "../images/logo-happycow.png";

export default function Header() {
  return (
    <header>
      <ul className="menu">
        <li className="submenu">
          <ul>
            <li>
              <a href="/">
                <img src={logo} alt="logo HappyCow" />
              </a>
            </li>
            <li>
              <a href="#">Restaurants & stores</a>
            </li>
            <li>
              <a href="#">Veg topcis</a>
            </li>
            <li>
              <a href="#">Recips</a>
            </li>
            <li>
              <a href="#">Feed the cow</a>
            </li>
          </ul>
        </li>

        <li className="member center">
          <ul>
            <li>
              <a href="#">Add listing</a>
            </li>
            <li>
              <a href="#">Login / Join</a>
            </li>
          </ul>
        </li>
      </ul>
    </header>
  );
}
