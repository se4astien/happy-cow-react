import React, { useState, useEffect } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";
// Components
import ProductsSearchFilterMap from "../components/ProductsSearchFilterMap";
// CSS
import "../css/ProductsSearch.css";

const api =
  "https://res.cloudinary.com/lereacteur-apollo/raw/upload/v1575242111/10w-full-stack/Scraping/restaurants.json";

export default function ProductsSearchfilter() {
  let { city } = useParams(); // paramètre récupéré via la route dans App

  const [restaurants, setRestaurants] = useState({});
  const [loading, setLoading] = useState(false);

  console.log(restaurants.address);

  // parcourir fichier JSON
  const productsName = [];
  for (let key in restaurants) {
    if (restaurants.hasOwnProperty(key)) {
      // on push dans le tableau 'name' le name du JSON
      productsName.push(restaurants[key].name);
    }
  }
  // console.log(productsName); // productsName du tableau restaurants

  let count = productsName.length; // permet de compter le nomdre d'objet dans le tableau

  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);
      const res = await axios.get(api);
      setRestaurants(res.data);
      setLoading(false);
    };
    fetchData();
  }, []); // pour éviter une boucle infinie au chargement du composant

  // filters
  const [searchTerm, setSearchTerm] = useState("");
  const [searchResults, setSearchResults] = useState([]);

  const handleChange = event => {
    setSearchTerm(event.target.value);
  };
  useEffect(() => {
    const results = productsName.filter(result =>
      result.toLowerCase().includes(searchTerm)
    );
    setSearchResults(results);
  }, [searchTerm]);

  if (loading) {
    return <h2>Loading...</h2>;
  }
  return (
    <>
      <section className="container border-top">
        <div className="flexOne">
          <div className="search-filter">
            <div className="count flex">
              We found {count} results for {city}
            </div>
            <div className="form">
              <input
                type="text"
                placeholder="Search by name"
                value={searchTerm}
                onChange={handleChange}
              />
              <button type="submit">
                <ion-icon name="search"></ion-icon>
              </button>
              <div className="display-results">
                {searchTerm && searchTerm ? (
                  <ul className="display column">
                    {searchResults.map((item, index) => (
                      <li key={index}>{item}</li>
                    ))}
                  </ul>
                ) : (
                  <ul className="display column">
                    {productsName.map((item, index) => (
                      <li key={index}>{item}</li>
                    ))}
                  </ul>
                )}
              </div>
            </div>
          </div>
          <ProductsSearchFilterMap />
        </div>
      </section>
    </>
  );
}
