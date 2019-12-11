import React, { useState, useEffect } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";
// Components
import ProductsSearchFilterMap from "../components/ProductsSearchFilterMap";
// CSS
import "../css/ProductsSearch.css";

export default function ProductsSearchfilter() {
  // paramètre récupéré via la route dans App
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
      const newTab = [];
      for (let i = 0; i < res.data.length; i++) {
        newTab.push({ name: res.data[i].name, picture: res.data[i].thumbnail });
      }
      setNewTab(newTab);
      // console.log(newTab);
    };
    fetchData();
  }, []); // pour éviter une boucle infinie au chargement du composant
  /////////////////////

  ////////FILTER///////

  // console.log(newTab);

  const [searchTerm, setSearchTerm] = useState("");
  const [searchResults, setSearchResults] = useState([]);
  const handleChange = event => {
    setSearchTerm(event.target.value);
  };
  useEffect(() => {
    //console.log(newTab);
    const results = newTab.filter(item =>
      item.name.toLowerCase().includes(searchTerm)
    );
    console.log(results); // tableau vide
    setSearchResults(results);
  }, [searchTerm]);

  /////////////////////

  return (
    <>
      <section className="container border-top">
        <div className="flexOne">
          <div className="search-filter">
            <div className="count flex">We found 924 results for {city}</div>
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
    </>
  );
}
