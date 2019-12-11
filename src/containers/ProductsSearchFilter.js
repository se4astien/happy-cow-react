import React, { useState, useEffect } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";
// Components
import ProductsSearchFilterMap from "../components/ProductsSearchFilterMap";
// CSS
import "../css/ProductsSearch.css";

export default function ProductsSearchfilter() {
  // paramètre récupéré via <Route path="/products-search/:city"> dans App
  let { city } = useParams();

  /////////////////////
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(false);
  const [newTab, setNewTab] = useState([]);

  // on met l'url du json dans une variable
  const api =
    "https://res.cloudinary.com/lereacteur-apollo/raw/upload/v1575242111/10w-full-stack/Scraping/restaurants.json";

  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);
      const res = await axios.get(api);
      setProducts(res.data);
      setLoading(false);
      // on va créer un tableau vide
      const newTab = [];
      // on boucle sur res.data
      for (let i = 0; i < res.data.length; i++) {
        // on push dans newTab le name et l'image
        newTab.push({ name: res.data[i].name, picture: res.data[i].thumbnail });
      }
      setNewTab(newTab);
      // console.log(newTab);
    };
    fetchData();
  }, []); // permet d'arrêter le chargement du composant
  /////////////////////

  ////////FILTER///////
  const [searchTerm, setSearchTerm] = useState("");
  const [searchResults, setSearchResults] = useState([]);
  const handleChange = event => {
    setSearchTerm(event.target.value);
  };
  useEffect(() => {
    const results = newTab.filter(item =>
      item.name.toLowerCase().includes(searchTerm)
    );
    console.log(results);
    setSearchResults(results);
  }, [searchTerm]); // composant qui se recharge à chaque lettre tapé par l'utilisateur
  /////////////////////

  let count = products.length;

  if (loading) {
    return <p>Loading...</p>;
  }

  return (
    <section className="container border-top">
      <div className="flexOne">
        <div className="search-filter">
          <div className="count flex">
            We found {count} results for {city}
          </div>
          <div className="form">
            <input
              type="text"
              placeholder="Search"
              value={searchTerm}
              onChange={handleChange}
            />
            <button type="submit">
              <ion-icon name="search"></ion-icon>
            </button>
            <div className="display-results">
              {searchTerm && searchTerm ? (
                <ul>
                  {searchResults.map((item, index) => (
                    <li key={index}>
                      {item.name}
                      <img src={item.picture} />
                    </li>
                  ))}
                </ul>
              ) : (
                <ul className="display column">
                  {newTab.map((item, index) => (
                    <li key={index}>
                      {item.name}
                      <img src={item.picture} />
                    </li>
                  ))}
                </ul>
              )}
            </div>
          </div>
        </div>
        <ProductsSearchFilterMap />
      </div>
    </section>
  );
}
