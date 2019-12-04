import React from "react";
import "../css/App.css";
import FooterMenu from "../components/FooterMenu";

export default function Footer() {
  return (
    <footer>
      <div className="wrapper">
        <div className="footer">
          <FooterMenu />
          <FooterMenu />
          <FooterMenu />
          <FooterMenu />
        </div>
      </div>
    </footer>
  );
}
