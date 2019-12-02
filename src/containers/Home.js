import React from "react";
import { Link } from "react-router-dom";
import "../css/App.css";

export default function Home() {
  return (
    <section className="search">
      <div className="wrapper center column">
        <h1>Find Vegan Restaurants Nearby</h1>
        <form>
          <input type="text" value="" />
          <button type="submit">
            <ion-icon name="search"></ion-icon>
          </button>
        </form>
      </div>
      <div class="svg">
        <svg
          id="Layer_1"
          data-name="Layer 1"
          version="1.1"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 1366.5 217.5"
          preserveAspectRatio="xMaxYMax meet"
        >
          <path
            class="cls"
            d="M0,601a1849.2,1849.2,0,0,1,370-47c246.77-6.15,360,41.14,613,38,95.54-1.19,226.52-9.76,383-42q-.26,108.75-.5,217.5H-.5Z"
            transform="translate(0.5 -550)"
          ></path>
        </svg>
      </div>
    </section>
  );
}
