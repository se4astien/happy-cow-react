import React from "react";
import { Link } from "react-router-dom";

export default function Card() {
  return (
    <Link to="/card-restaurant-detail/123456">
      <div className="card">
        <div className="card-picture">
          <a href="#">
            <img
              src="https://images.happycow.net/venues/500/17/38/hcmp173847_668236.jpeg"
              alt="cover restaurant"
            />
            <span>
              <ion-icon name="heart-empty"></ion-icon>
            </span>
          </a>
        </div>

        <h3 className="no-margin no-padding">
          <a href="#">The gallery</a>
        </h3>
        <p className="localisation no-margin">Vendays-montalivet, France</p>
        <div className="review">
          <ul>
            <li>
              <ion-icon name="star" className="star"></ion-icon>
            </li>
            <li>
              <ion-icon name="star" className="star"></ion-icon>
            </li>
            <li>
              <ion-icon name="star" className="star"></ion-icon>
            </li>
            <li>
              <ion-icon name="star" className="star"></ion-icon>
            </li>
            <li>
              <ion-icon name="star" className="star"></ion-icon>
            </li>
          </ul>
          <span>3 reviews</span>
        </div>
        <p className="description no-margin">
          Surf restaurant serving smoothies and organic dishes. Open daily,
          hours may vary. Use of eggs ...
        </p>
      </div>
    </Link>
  );
}
