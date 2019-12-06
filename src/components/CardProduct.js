import React from "react";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
// import CSS
import "../css/App.css";
import "../css/Search.css";
import "../css/Products.css";
// import Components
import Reviews from "./Reviews";

const CardProduct = ({ posts, loading, stars }) => {
  if (loading) {
    return <h2>Loading...</h2>;
  }
  return (
    <ul className="card-list full-space">
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
            <p className="localisation no-margin">Vendays-montalivet, France</p>
            <Reviews post={post} />
            <p className="description no-margin">{post.description}</p>
          </div>
        </li>
      ))}
    </ul>
  );
};

export default CardProduct;
