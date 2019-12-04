import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
// import CSS
import "../css/App.css";
import "../css/Search.css";
import "../css/Products.css";
// import Components
import Search from "../components/Search";
import CardProduct from "../components/CardProduct";

export default function Products() {
  // Création des états
  const [isLoading, setIsLoading] = useState(true);
  const [products, setProducts] = useState("");

  // useEffect permet de charger les données uniquement à la création du composant
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(
          "https://res.cloudinary.com/lereacteur-apollo/raw/upload/v1575242111/10w-full-stack/Scraping/restaurants.json"
        );
        // console.log(response.data); // [{...}]
        // console.log(response.data[0].name); // Veganie
        // console.log(response.data[0].address); // 96 rue Quincampoix, Paris, France, 75003

        setProducts(response.data);
        setIsLoading(false);
      } catch (error) {
        alert("An error occured");
      }
    };
    fetchData();
  }, []); // on réinitialise la fonction fetchData avec un tableau vide
  return (
    <>
      <Search />
      <section className="wrapper">
        <div className="card-list center">
          <h2>Vegan Food Near Me</h2>
          <div className="view-all">
            <Link to="#">View all ></Link>
          </div>
        </div>
        <div className="card-list full-space">
          {isLoading === true ? (
            <p>Chargement...</p>
          ) : (
            products.map(product => {
              // ... permet de récupérer tous les attributs de products en tant que props
              return <CardProduct {...product} />;
            })
          )}
        </div>
      </section>
    </>
  );
}
