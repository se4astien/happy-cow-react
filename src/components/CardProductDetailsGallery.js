import React from "react";

const CardProductDetailsGallery = ({ pictures, name }) => {
  return (
    <div className="listing-images flex">
      {pictures.map((picture, index) => {
        return (
          <div className="listing-image">
            <img key={index} src={picture} alt={name} />
          </div>
        );
      })}
    </div>
  );
};

export default CardProductDetailsGallery;
