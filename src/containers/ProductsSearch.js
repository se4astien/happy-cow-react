import React from "react";
import {
  BrowserRouter as Router,
  Route,
  Link,
  useParams
} from "react-router-dom";
// CSS
import "../css/ProductsSearch.css";

export default function ProductsSearch() {
  let { city } = useParams(); // récupère la ville du résultat de recherche

  return <div>nom de la ville : {city}</div>;
}
