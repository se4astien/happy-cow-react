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
  const [tab, setTab] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);
      const res = await axios.get(
        "https://res.cloudinary.com/lereacteur-apollo/raw/upload/v1575242111/10w-full-stack/Scraping/restaurants.json"
      );
      setProducts(res.data);
      setLoading(false);

      // 2. Pour comparer les résultats de la recheche, on créer un tableau pour insérer les elmts à afficher
      const tab = [];
      // on boucle sur res.data
      for (let i = 0; i < res.data.length; i++) {
        // On créer un objet avec une clé 'name' et 'picture' qu'on push dans tab
        tab.push({ name: res.data[i].name, picture: res.data[i].thumbnail });
      }
      setTab(tab);
      // console.log(tab);
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
    // 1. Afin de faire une recherche, on doit filtrer des éléments d'un tableau.
    const results = tab.filter(item =>
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
                <ul className="search-filter-results">
                  {searchResults.map((item, index) => (
                    <li key={index}>
                      <img src={item.picture} />
                      <div>
                        <p>{item.name}</p>
                      </div>
                    </li>
                  ))}
                </ul>
              ) : (
                <ul className="search-filter-results">
                  {tab.map((item, index) => (
                    <li key={index}>
                      <img src={item.picture} />
                      <div>
                        <p>{item.name}</p>
                      </div>
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
