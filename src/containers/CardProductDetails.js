import React, { useState, useEffect } from "react";
import axios from "axios";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  useParams
} from "react-router-dom";
import "../css/CardProductDetails.css";

export default function CardProductDetails() {
  let { id, name, description } = useParams(); // récupère l'ID de l'annonce
  // const [isLoading, setIsLoading] = useState(true);
  // const [product, setProduct] = useState({});

  // useEffect(() => {
  //   const fetchData = async () => {
  //     try {
  //       const response = await axios.get(
  //         "https://res.cloudinary.com/lereacteur-apollo/raw/upload/v1575242111/10w-full-stack/Scraping/restaurants.json"
  //       );

  //       setProduct(response.data);
  //       setIsLoading(false);
  //     } catch (error) {
  //       alert("An error occured");
  //     }
  //   };
  //   fetchData();
  // }, []);

  return (
    <section>
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
                  <ion-icon name="create"></ion-icon>
                  <span>Update</span>
                </li>
                <li>
                  <ion-icon name="star"></ion-icon>
                  <span>Favorite</span>
                </li>
                <li>
                  <ion-icon name="airplane"></ion-icon>
                  <span>Trip</span>
                </li>
                <li>
                  <ion-icon name="share-alt"></ion-icon>
                  <span>Share</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
       
      <div className="wrapper flex">
        <div className="content-desc">
          <ul className="full-space">
            <li>
              <ion-icon name="time"></ion-icon>
              <div className="column">
                <span>Hours</span>
                <span>Tell us</span>
              </div>
            </li>
            <li>
              <ion-icon name="call"></ion-icon>
              <div className="column">
                <span>Contact</span>
                <span>+33-622098695</span>
              </div>
            </li>
            <li>
              <i class="material-icons">accessibility</i>
              <div className="column">
                <span>Find</span>
                <span>
                  49 Ave Brémontier, Vendays-montalivet, France, 33930
                </span>
              </div>
            </li>
          </ul>

          <div>
            <p className="description">
              Surf restaurant serving smoothies and organic dishes. Open daily,
              hours may vary. Use of eggs reported in Aug 2019.
            </p>
            <p className="categories">
              Categories: Ovo, Organic, Mediterranean, Beer/Wine, Take-out,
              Mexican, European, French, Fusion, Gluten-free
            </p>
          </div>

          <div className="actions">
            <ul>
              <li>
                <Link to="#">Add review</Link>
              </li>
              <li>
                <Link to="#">Add photo</Link>
              </li>
            </ul>
          </div>

          <div className="listing-images">
            <div>
              <img src="#" alt="#" />
            </div>
            <div>
              <img src="#" alt="#" />
            </div>
          </div>
        </div>

        <div className="map">mettre la map ici</div>
      </div>
      <div>restaurant : {id}</div>
      <div className="infos">restaurant : {name}</div>
      <div className="infos">restaurant : {description}</div>
    </section>
  );
}
