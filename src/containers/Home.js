import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
// import CSS
import "../css/App.css";
import "../css/Search.css";
import "../css/Home.css";
// import Components
import Search from "../components/Search";
import CardRestaurant from "../components/CardRestaurant";

export default function Home() {
  // Création des états
  const [isLoading, setIsLoading] = useState(true);
  const [products, setProducts] = useState([]);

  // useEffect permet de charger les données uniquement à la création du composant
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(
          "https://res.cloudinary.com/lereacteur-apollo/raw/upload/v1575242111/10w-full-stack/Scraping/restaurants.json"
        );
        console.log(response.data);
        console.log(response.data.name);

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
      {isLoading === true ? (
        <p>Chargement...</p>
      ) : (
        <section className="wrapper">
          <div className="card-list center">
            <h2>Vegan Food Near Me</h2>
            <p>
              <Link to="#">View all</Link>
            </p>
          </div>
          <div className="card-list center">
            <CardRestaurant />
            <CardRestaurant />
            <CardRestaurant />
            <CardRestaurant />
          </div>
        </section>
      )}
    </>
  );
}
