import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import Products from "./Products";
import Posts from "../components/Posts";
import Pagination from "../components/Pagination";

const ProductsTest = () => {
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(false);
  const [currentPage, setCurrentPage] = useState(1);
  const [postsPerPage] = useState(20);

  useEffect(() => {
    const fetchPosts = async () => {
      setLoading(true);
      const res = await axios.get(
        "https://res.cloudinary.com/lereacteur-apollo/raw/upload/v1575242111/10w-full-stack/Scraping/restaurants.json"
      );
      setPosts(res.data);
      setLoading(false);
    };
    fetchPosts();
  }, []); // pour éviter une boucle infinie au chargement du composant

  // console.log(posts);

  // Get current posts
  const indexOfLastPost = currentPage * postsPerPage;
  const indexOfFirstPost = indexOfLastPost - postsPerPage;
  const currentPosts = posts.slice(indexOfFirstPost, indexOfLastPost);

  // Change page
  const paginate = pageNumber => setCurrentPage(pageNumber);

  return (
    <div>
      <h1>My app test pagination</h1>
      <Posts posts={currentPosts} loading={loading} />
      <Pagination
        postsPerPage={postsPerPage}
        totalPosts={posts.length}
        paginate={paginate}
      />
    </div>
  );
};

export default ProductsTest;
