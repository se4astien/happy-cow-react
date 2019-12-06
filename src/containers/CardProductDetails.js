import React, { useState, useEffect } from "react";
// import axios from "axios";
import {
  BrowserRouter as Router,
  Route,
  Link,
  useParams
} from "react-router-dom";
// CSS
import "../css/CardProductDetails.css";
// Components
import CardProductDetailsHero from "../components/CardProductDetailsHero";
import CardProductDetailsMap from "../components/CardProductDetailsMap";

export default function CardProductDetails(props) {
  let { id } = useParams(); // récupère l'ID de l'annonce

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
      <CardProductDetailsHero /> 
      <div className="wrapper flex">
        <div className="details-desc">
          <ul className="full-space">
            <li>
              <i className="material-icons green">access_time</i>
              <div className="rub column">
                <span className="title">Hours</span>
                <span className="desc">Tell us</span>
              </div>
            </li>
            <li>
              <i className="material-icons green">phone</i>
              <div className="rub column">
                <span className="title">Contact</span>
                <span className="desc">+33-622098695</span>
              </div>
            </li>
            <li>
              <i className="material-icons green">where_to_vote</i>
              <div className="rub column">
                <span className="title">Find</span>
                <span className="desc">
                  49 Ave Brémontier, Vendays-montalivet, France, 33930
                </span>
              </div>
            </li>
          </ul>

          <div className="description">
            <p className="desc">
              Surf restaurant serving smoothies and organic dishes. Open daily,
              hours may vary. Use of eggs reported in Aug 2019.
            </p>
            <p className="cat">
              Categories: Ovo, Organic, Mediterranean, Beer/Wine, Take-out,
              Mexican, European, French, Fusion, Gluten-free
            </p>
          </div>

          <div className="actions">
            <ul>
              <li>
                <Link to="#" className="btn btn-purple">
                  <i className="material-icons">create</i>
                  <span>Add review</span>
                </Link>
              </li>
              <li>
                <Link to="#" className="btn btn-purple">
                  <i className="material-icons">local_see</i>
                  <span>Add photo</span>
                </Link>
              </li>
            </ul>
          </div>

          <div className="listing-images flex">
            <div>
              <img
                src="https://images.happycow.net/venues/500/17/38/hcmp173847_668236.jpeg"
                alt="#"
              />
              <img
                src="https://images.happycow.net/venues/500/17/38/hcmp173847_668236.jpeg"
                alt="#"
              />
            </div>
          </div>
        </div>

        <CardProductDetailsMap />
      </div>
      <div>restaurant : {id}</div>
    </section>
  );
}
