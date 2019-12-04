import React from "react";
import { Link } from "react-router-dom";

export default function CardProductDetailsHero() {
  return (
    <>
      <div className="hero">
        <div className="wrapper">
          <div className="center">
            <div className="infos">
              <h1>The gallery</h1>
              <div className="review flex">
                <ul>
                  <li>
                    <ion-icon name="star"></ion-icon>
                  </li>
                  <li>
                    <ion-icon name="star"></ion-icon>
                  </li>
                  <li>
                    <ion-icon name="star"></ion-icon>
                  </li>
                  <li>
                    <ion-icon name="star"></ion-icon>
                  </li>
                  <li>
                    <ion-icon name="star"></ion-icon>
                  </li>
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
