import React from "react";
import { useLocation } from "react-router";

const CardProductDetailsGallery = () => {
  let location = useLocation();
  return (
    <>
      <div className="listing-images flex">
        <div>
          <img src={location.state.pictures[1]} alt="#" />
          <img src={location.state.pictures[2]} alt="#" />
          <img src={location.state.pictures[3]} alt="#" />
          <img src={location.state.pictures[4]} alt="#" />
          <img src={location.state.pictures[5]} alt="#" />
        </div>
      </div>
    </>
  );
};

export default CardProductDetailsGallery;
