import React from "react";
import "../css/App.css";
import "../css/Search.css";
import "../css/Home.css";

import Search from "../components/Search";
import CardRestaurant from "../components/CardRestaurant";

export default function Home() {
  return (
    <>
      <Search />
      <section className="wrapper">
        <div className="card-list center">
          <h2>Vegan Food Near Me</h2>
          <p>
            <a href="">View all</a>
          </p>
        </div>
        <div className="card-list center">
          <CardRestaurant />
          <CardRestaurant />
          <CardRestaurant />
          <CardRestaurant />
        </div>
      </section>
    </>
  );
}
