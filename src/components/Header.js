import React from "react";
import "../css/App.css";
import logo from "../images/logo-happycow.png";

export default function Header() {
  return (
    <header className="App-header">
      <img src={logo} className="App-logo" alt="logo" />
      <p>Hello Header</p>
    </header>
  );
}
