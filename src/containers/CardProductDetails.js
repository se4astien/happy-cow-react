import React from "react";
import { useLocation } from "react-router";
import AliceCarousel from "react-alice-carousel";
import "react-alice-carousel/lib/alice-carousel.css";
// CSS
import "../css/CardProductDetails.css";
// Components
import CardProductDetailsHero from "../components/CardProductDetailsHero";
import CardProductDetailsMap from "../components/CardProductDetailsMap";
import Comments from "../components/Comments";

export default function CardProductDetails() {
  let location = useLocation();
  const handleOnDragStart = e => e.preventDefault();

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

          {/* <div className="actions">
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
          </div> */}

          {/* <div className="listing-images flex">
            <AliceCarousel mouseTrackingEnabled>
              {location.state.pictures.map((item, index) => {
                return (
                  <li key={index}>
                    <img
                      src={item}
                      onDragStart={handleOnDragStart}
                      className="yours-custom-class"
                    />
                  </li>
                );
              })}
            </AliceCarousel>
          </div> */}

          <div className="listing-images flex">
            <div>
              <img src={location.state.pictures[0]} alt="#" />
              <img src={location.state.pictures[1]} alt="#" />
              <img src={location.state.pictures[2]} alt="#" />
              <img src={location.state.pictures[3]} alt="#" />
              <img src={location.state.pictures[4]} alt="#" />
              <img src={location.state.pictures[5]} alt="#" />
            </div>
          </div>
        </div>

        <CardProductDetailsMap />
      </section>

      <section className="wrapper comments">
        <Comments />
      </section>
    </>
  );
}
