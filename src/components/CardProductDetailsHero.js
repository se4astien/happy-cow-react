import React from "react";
import { useLocation } from "react-router";
import { Link } from "react-router-dom";

export default function CardProductDetailsHero() {
  let location = useLocation(); // récupère les data envoyés via Link 'CardProduct.js'

  // ratings
  const stars = [];
  const half = 0.5;

  for (let i = half; i < 5; i++) {
    if (i < location.state.rating) {
      stars.push(
        <li className="purple">
          <ion-icon key={i} name="star"></ion-icon>
        </li>
      );
    } else if (i <= location.state.rating) {
      stars.push(
        <li className="purple">
          <ion-icon key={i} name="star-half"></ion-icon>
        </li>
      );
    } else {
      stars.push(
        <li className="white">
          <ion-icon key={i} name="star"></ion-icon>
        </li>
      );
    }
  }
  return (
    <section className="hero">
      <div className="wrapper">
        <div className="center">
          <div className="infos">
            <h1>{location.state.name}</h1>
            <div className="review flex">
              <ul>
                <li>{stars}</li>
              </ul>
            </div>
          </div>

          <div className="options">
            <ul>
              <li>
                <Link to="#">
                  <ion-icon name="create"></ion-icon>
                  <span>Update</span>
                </Link>
              </li>
              <li>
                <Link to="#">
                  <ion-icon name="star"></ion-icon>
                  <span>Favorite</span>
                </Link>
              </li>
              <li>
                <Link to="#">
                  <ion-icon name="airplane"></ion-icon>
                  <span>Trip</span>
                </Link>
              </li>
              <li>
                <Link to="#">
                  <ion-icon name="share-alt"></ion-icon>
                  <span>Share</span>
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
