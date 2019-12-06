import React from "react";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";

export default function CardProduct(props) {
  // ratings
  const stars = [];
  const half = 0.5;

  for (let i = half; i < 5; i++) {
    if (i < props.rating) {
      stars.push(
        <li className="yellowgreen">
          <ion-icon key={i} name="star"></ion-icon>
        </li>
      );
    } else if (i <= props.rating) {
      stars.push(
        <li className="yellowgreen">
          <ion-icon key={i} name="star-half"></ion-icon>
        </li>
      );
    } else {
      stars.push(
        <li className="grey">
          <ion-icon key={i} name="star"></ion-icon>
        </li>
      );
    }
  }

  return (
    <div className="card">
      <div className="card-picture">
        <Link to={`/card-product-details/${props.placeId}`}>
          <img src={props.thumbnail} alt={props.name} />
          <span>
            <ion-icon name="heart-empty"></ion-icon>
          </span>
        </Link>
      </div>

      <h3 className="no-margin no-padding ellipsis">
        <Link to={`/card-product-details/${props.placeId}`}>{props.name}</Link>
      </h3>

      <p className="localisation no-margin">Vendays-montalivet, France</p>
      <div className="review">
        <ul>
          <li>{stars}</li>
        </ul>
        <span>{props.rating} reviews</span>
      </div>
      <p className="description no-margin">{props.description}</p>
    </div>
  );
}
