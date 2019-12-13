import React from "react";
import { Link } from "react-router-dom";
// import CSS
import "../css/App.css";
import "../css/Search.css";
import "../css/Products.css";
// import Components
import Reviews from "./Reviews";

const CardProduct = ({ products, loading }) => {
  if (loading) {
    return <div class="ui active centered inline loader"></div>;
  }
  return (
    <ul className="card-list full-space">
      {products.map(product => (
        <li key={product.id}>
          <div className="card">
            <div className="card-picture">
              <Link
                to={{
                  pathname: `/card-product-details/${product.placeId}`,
                  state: {
                    name: product.name,
                    description: product.description,
                    address: product.address,
                    phone: product.phone,
                    pictures: product.pictures,
                    rating: product.rating,
                    coordinates: {
                      lng: product.location.lng,
                      lat: product.location.lat
                    },
                    price: product.price,
                    website: product.website
                  }
                }}
              >
                <img src={product.thumbnail} alt={product.name} />
                <span>
                  <ion-icon name="heart-empty"></ion-icon>
                </span>
              </Link>
            </div>
            <h3 className="no-margin no-padding ellipsis">
              <Link
                to={{
                  pathname: `/card-product-details/${product.placeId}`,
                  state: {
                    name: product.name,
                    description: product.description,
                    address: product.address,
                    phone: product.phone,
                    pictures: product.pictures,
                    rating: product.rating,
                    location: {
                      lng: product.location.lng,
                      lat: product.location.lat
                    }
                  }
                }}
              >
                {product.name}
              </Link>
            </h3>
            <p className="localisation no-margin">Paris, France</p>
            <Reviews product={product} />
            <p className="description no-margin">{product.description}</p>
          </div>
        </li>
      ))}
    </ul>
  );
};

export default CardProduct;
