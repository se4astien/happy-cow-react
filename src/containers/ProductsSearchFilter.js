import React, { useState, useEffect } from "react";
import axios from "axios";
import { useParams, Link } from "react-router-dom";
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
        // On créer un objet avec des clés (name, picture, ect...) qu'on push dans tab
        tab.push({
          id: res.data[i].placeId,
          name: res.data[i].name,
          thumbnail: res.data[i].thumbnail,
          phone: res.data[i].phone,
          location: {
            lng: res.data[i].location.lng,
            lat: res.data[i].location.lat
          }
        });
      }
      setTab(tab);
      // console.log(tab); // (924) [{...}]
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
    // 1. Afin de faire une recherche, on doit filtrer des éléments d'un tableau (ici tab).
    const results = tab.filter(item =>
      item.name.toLowerCase().includes(searchTerm)
    );
    // console.log(results);
    setSearchResults(results);
  }, [searchTerm]); // composant qui se recharge à chaque lettre tapé par l'utilisateur
  /////////////////////

  let count = products.length;

  if (loading) {
    return <div class="ui active centered inline loader"></div>;
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
                    <Link to={`/card-product-details/${item.id}`}>
                      <li key={index}>
                        <img src={item.thumbnail} alt={item.name} />
                        <div>
                          <p>{item.name}</p>
                          <p>{item.price}</p>
                        </div>
                      </li>
                    </Link>
                  ))}
                </ul>
              ) : (
                <ul className="search-filter-results">
                  {tab.map((item, index) => (
                    <Link
                      to={{
                        pathname: `/card-product-details/${item.id}`,
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
                      <li key={index}>
                        <img src={item.thumbnail} alt={item.name} />
                        <div>
                          <p>{item.name}</p>
                          <p>{item.price}</p>
                        </div>
                      </li>
                    </Link>
                  ))}
                </ul>
              )}
            </div>
          </div>
        </div>
        <ProductsSearchFilterMap tab={tab} loading={loading} />;
      </div>
    </section>
  );
}
