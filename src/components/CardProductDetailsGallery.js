import React from "react";

const CardProductDetailsGallery = ({ pictures, name }) => {
  return (
    <>
      <div className="listing-images flex">
        <div>
          {pictures.map((picture, index) => {
            return <img key={index} src={picture} alt={name} />;
          })}
        </div>
      </div>
    </>
  );
};

export default CardProductDetailsGallery;
