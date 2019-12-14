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
    return <div className="ui active centered inline loader"></div>;
  }
  return (
    <ul className="card-list full-space">
      {products.map((item, index) => (
        <li key={index}>
          <div className="card">
            <div className="card-picture">
              <Link
                to={{
                  pathname: `/card-product-details/${item.placeId}`,
                  state: {
                    name: item.name,
                    description: item.description,
                    address: item.address,
                    phone: item.phone,
                    pictures: item.pictures,
                    rating: item.rating,
                    coordinates: {
                      lng: item.location.lng,
                      lat: item.location.lat
                    },
                    price: item.price,
                    website: item.website
                  }
                }}
              >
                <img src={item.thumbnail} alt={item.name} />
                <span>
                  <ion-icon name="heart-empty"></ion-icon>
                </span>
              </Link>
            </div>
            <h3 className="no-margin no-padding ellipsis">
              <Link
                to={{
                  pathname: `/card-product-details/${item.placeId}`,
                  state: {
                    name: item.name,
                    description: item.description,
                    address: item.address,
                    phone: item.phone,
                    pictures: item.pictures,
                    rating: item.rating,
                    coordinates: {
                      lng: item.location.lng,
                      lat: item.location.lat
                    },
                    price: item.price,
                    website: item.website
                  }
                }}
              >
                {item.name}
              </Link>
            </h3>
            <p className="localisation no-margin">Paris, France</p>
            <Reviews item={item} />
            <p className="description no-margin">{item.description}</p>
          </div>
        </li>
      ))}
    </ul>
  );
};

export default CardProduct;
