import React from "react";
import { Link } from "react-router-dom";

export default function CardProduct(props) {
  return (
    <div className="card">
      <div className="card-picture">
        <Link to={"/card-restaurant-details/" + props.placeId}>
          <img src={props.thumbnail} alt={props.name} />
          <span>
            <ion-icon name="heart-empty"></ion-icon>
          </span>
        </Link>
      </div>

      <h3 className="no-margin no-padding ellipsis">
        <Link to={"/card-restaurant-detail/" + props.placeId}>
          {props.name}
        </Link>
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
