import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  useParams
} from "react-router-dom";

export default function CardRestaurantDetail() {
  let { id } = useParams();
  return (
    <section className="offer">
      <div className="container">
        <article>
          <div>
            <div className="bg-silver center">
              <img
                src="https://img6.leboncoin.fr/ad-large/a45ff6ecfb0289c2809d971c33bbf54c786ea12d.jpg"
                alt=""
              />
            </div>

            <div className="infos">annonce {id}</div>
          </div>
          <div className="description">ma description</div>
        </article>
        <aside className="red">
          <div>Nom</div>
          <div className="buttons">
            <button>Premier bouton</button>
            <button>Deuxième bouton</button>
          </div>
        </aside>
      </div>
    </section>
  );
}
