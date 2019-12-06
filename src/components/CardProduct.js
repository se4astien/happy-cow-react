import React from "react";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";

const CardProduct = ({ posts, loading }) => {
  // ratings
  const stars = [];
  const half = 0.5;

  for (let i = half; i < 5; i++) {
    if (i < posts.rating) {
      stars.push(
        <li className="yellowgreen">
          <ion-icon key={i} name="star"></ion-icon>
        </li>
      );
    } else if (i <= posts.rating) {
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

  if (loading) {
    return <h2>Loading...</h2>;
  }

  return (
    <ul>
      <div className="card-list full-space">
        {posts.map(post => (
          <li key={post.id}>
            <div className="card">
              <div className="card-picture">
                <Link to={`/card-product-details/${post.placeId}`}>
                  <img src={post.thumbnail} alt={post.name} />
                  <span>
                    <ion-icon name="heart-empty"></ion-icon>
                  </span>
                </Link>
              </div>
              <h3 className="no-margin no-padding ellipsis">
                <Link to={`/card-product-details/${post.placeId}`}>
                  {post.name}
                </Link>
              </h3>
              <p className="localisation no-margin">
                Vendays-montalivet, France
              </p>
              <div className="review">
                <ul>
                  <li>{stars}</li>
                </ul>
                <span>{post.rating} reviews</span>
              </div>
              <p className="description no-margin">{post.description}</p>
            </div>
          </li>
        ))}
      </div>
    </ul>
  );
};

export default CardProduct;
