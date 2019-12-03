import React from "react";
import { Link } from "react-router-dom";

export default function CardRestaurant(props) {
  return (
    <div className="card">
      <div className="card-picture">
        <Link to="/card-restaurant-detail/123456">
          <img src={props.picture} alt="cover restaurant" />
          <span>
            <ion-icon name="heart-empty"></ion-icon>
          </span>
        </Link>
      </div>

      <h3 className="no-margin no-padding">
        <Link to="/card-restaurant-detail/123456">{props.name}</Link>
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
      <p className="description no-margin">{props.description}</p>
    </div>
  );
}
