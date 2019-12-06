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

const ProductsTest = () => {
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(false);
  const [currentPage, setCurrentPage] = useState(1);
  const [postsPerPage] = useState(40);

  useEffect(() => {
    const fetchProducts = async () => {
      setLoading(true);
      const res = await axios.get(
        "https://res.cloudinary.com/lereacteur-apollo/raw/upload/v1575242111/10w-full-stack/Scraping/restaurants.json"
      );
      setPosts(res.data);
      setLoading(false);
    };
    fetchProducts();
  }, []); // pour éviter une boucle infinie au chargement du composant

  // console.log(posts);

  // Get current posts
  const indexOfLastPost = currentPage * postsPerPage;
  const indexOfFirstPost = indexOfLastPost - postsPerPage;
  const currentPosts = posts.slice(indexOfFirstPost, indexOfLastPost);

  // Change page
  const paginate = pageNumber => setCurrentPage(pageNumber);

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
        <CardProduct posts={currentPosts} loading={loading} />
        <Pagination
          postsPerPage={postsPerPage}
          totalPosts={posts.length}
          paginate={paginate}
        />
      </section>
    </>
  );
};

export default ProductsTest;
