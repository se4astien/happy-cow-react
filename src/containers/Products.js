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
import Pagination from "../components/Pagination";

const Products = () => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(false);

  // on met l'url du json dans une variable
  const api =
    "https://res.cloudinary.com/lereacteur-apollo/raw/upload/v1575242111/10w-full-stack/Scraping/restaurants.json";

  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);
      const res = await axios.get(api);
      setProducts(res.data);
      setLoading(false);
    };
    fetchData();
  }, []); // pour éviter une boucle infinie au chargement du composant

  // pagination
  const [currentPage, setCurrentPage] = useState(1);
  const [productsPerPage] = useState(40);

  // Get current products
  const indexOfLastPost = currentPage * productsPerPage;
  const indexOfFirstPost = indexOfLastPost - productsPerPage;
  const currentProducts = products.slice(indexOfFirstPost, indexOfLastPost);

  // Change page
  const paginate = pageNumber => setCurrentPage(pageNumber);

  return (
    <>
      <section className="search">
        <Search />
      </section>

      <section className="wrapper">
        <div className="card-list center">
          <h2>Vegan Food Near Me</h2>
          <div className="view-all">
            <Link to="#">View all ></Link>
          </div>
        </div>
        <CardProduct products={currentProducts} loading={loading} />
        <Pagination
          productsPerPage={productsPerPage}
          totalProducts={products.length}
          paginate={paginate}
        />
      </section>
    </>
  );
};

export default Products;
