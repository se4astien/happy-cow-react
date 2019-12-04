import React from "react";
import "../css/App.css";
// Components
import FooterCard from "../components/FooterCard";

export default function Footer() {
  return (
    <footer>
      <div className="wrapper">
        <div className="footer-card">
          <FooterCard />
          <FooterCard />
          <FooterCard />
          <FooterCard />
        </div>
      </div>
    </footer>
  );
}
