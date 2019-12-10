import React, { useState, useEffect, useRef } from "react";
import axios from "axios";
import L from "leaflet";
import {
  BrowserRouter as Router,
  Route,
  Link,
  useParams
} from "react-router-dom";
// CSS
import "../css/ProductsSearch.css";

// test
// const name = [
//   "Siri",
//   "Alexa",
//   "Google",
//   "Facebook",
//   "Twitter",
//   "Linkedin",
//   "Sinkedin"
// ];

export default function ProductsSearchfilter() {
  let { city } = useParams(); // paramètre récupéré via la route dans App

  const [restaurants, setRestaurants] = useState([]);
  const [loading, setLoading] = useState(false);

  // parcourir fichier JSON
  const name = [];
  for (let key in restaurants) {
    if (restaurants.hasOwnProperty(key)) {
      // on push dans le tableau 'name' le name du JSON
      name.push(restaurants[key].name);
    }
  }
  console.log(name); // name du tableau restaurants

  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);
      const res = await axios.get(
        "https://res.cloudinary.com/lereacteur-apollo/raw/upload/v1575242111/10w-full-stack/Scraping/restaurants.json"
      );
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
    const results = name.filter(result =>
      result.toLowerCase().includes(searchTerm)
    );
    setSearchResults(results);
  }, [searchTerm]);

  // create map
  const mapRef = useRef(null);
  useEffect(() => {
    mapRef.current = L.map("map", {
      center: [49.8419, 24.0315],
      zoom: 16,
      layers: [
        L.tileLayer("http://{s}.tile.osm.org/{z}/{x}/{y}.png", {
          attribution:
            '&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
        })
      ]
    });
  }, []);

  // add layer map
  const layerRef = useRef(null);
  useEffect(() => {
    layerRef.current = L.layerGroup().addTo(mapRef.current);
  }, []);

  return (
    <>
      <section className="container border-top">
        <div className="flexOne">
          <div className="search-filter">
            <div className="">We found 932 results for {city}</div>
            <div className="form">
              <input
                type="text"
                placeholder="Search"
                value={searchTerm}
                onChange={handleChange}
              />

              <ul>
                {searchResults.map(item => (
                  <li>{item}</li>
                ))}
              </ul>
              <ul className="column">
                {name.map(nameItem => (
                  <li>{nameItem}</li>
                ))}
              </ul>
            </div>
          </div>
          <div className="search-filter-map">
            <div id="map"></div>
          </div>
        </div>
      </section>
    </>
  );
}
