import React from "react";

const Reviews = ({ item }) => {
  // Ratings
  const stars = [];
  const half = 0.5;

  for (let i = half; i < 5; i++) {
    if (i < item.rating) {
      stars.push(
        <li className="yellowgreen">
          <ion-icon key={i} name="star"></ion-icon>
        </li>
      );
    } else if (i <= item.rating) {
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
    <div className="review">
      <ul>
        <li>{stars}</li>
      </ul>
      <span>{item.rating} reviews</span>
    </div>
  );
};
export default Reviews;
