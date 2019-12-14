import React from "react";
import { useLocation } from "react-router";
import { Link } from "react-router-dom";
// CSS
import "../css/CardProductDetails.css";
// Components
import CardProductDetailsHero from "../components/CardProductDetailsHero";
import CardProductDetailsGallery from "../components/CardProductDetailsGallery";
import CardProductDetailsMap from "../components/CardProductDetailsMap";
import Comments from "../components/Comments";
import Footer from "../components/Footer";

export default function CardProductDetails() {
  let location = useLocation(); // permet de récupérer les données envoyés via <Link />

  return (
    <>
      <CardProductDetailsHero />
      <section className="content wrapper flex">
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
                <span className="desc">{location.state.phone}</span>
              </div>
            </li>
            <li>
              <i className="material-icons green">where_to_vote</i>
              <div className="rub column">
                <span className="title">Find</span>
                <span className="desc">{location.state.address}</span>
              </div>
            </li>
          </ul>

          <div className="description">
            <p className="desc">{location.state.description}</p>
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

          <CardProductDetailsGallery
            pictures={location.state.pictures}
            name={location.state.name}
          />
        </div>

        <CardProductDetailsMap
          latitude={location.state.coordinates.lat}
          longitude={location.state.coordinates.lng}
          price={location.state.price}
          website={location.state.website}
        />
      </section>

      <section className="wrapper comments">
        <Comments />
      </section>
      <Footer />
    </>
  );
}
