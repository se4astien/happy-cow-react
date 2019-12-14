import React from "react";

const CardProductDetailsGallery = ({ pictures, name }) => {
  const tabPicture = [];
  for (let i = 0; i < pictures.length; i++) {
    tabPicture.push(pictures[i]);
  }
  console.log(tabPicture);

  return (
    <>
      <div className="listing-images flex">
        <div>
          <img src={tabPicture} alt={name} />
        </div>
      </div>
    </>
  );
};

export default CardProductDetailsGallery;
