import React from "react";
import { Link } from "react-router-dom";

export default function CardProductDetailsHero({ rating }) {
  // ratings
  const stars = [];
  for (let i = 0; i < 5; i++) {
    if (i < rating) {
      stars.push(
        <ion-icon key={i} name="star" className="yellowgreen"></ion-icon>
      );
    } else {
      stars.push(<ion-icon key={i} name="star" className="grey"></ion-icon>);
    }
  }
  return (
    <>
      <div className="hero">
        <div className="wrapper">
          <div className="center">
            <div className="infos">
              <h1>The gallery</h1>
              <div className="review flex">
                <ul>
                  <li>{stars}</li>
                </ul>
                <span>( 3 reviews )</span>
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
      </div>
    </>
  );
}
