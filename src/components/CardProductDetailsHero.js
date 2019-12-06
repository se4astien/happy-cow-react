import React from "react";
import { Link, useParams } from "react-router-dom";

export default function CardProductDetailsHero({ props, rating }) {
  let { id } = useParams(); // récupère l'ID de l'annonce
  let { name } = useParams();
  let { description } = useParams();

  // ratings
  const stars = [];
  const half = 0.5;

  for (let i = half; i < 5; i++) {
    if (i < 5) {
      stars.push(
        <li className="yellowgreen">
          <ion-icon key={i} name="star"></ion-icon>
        </li>
      );
    } else if (i <= 5) {
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
