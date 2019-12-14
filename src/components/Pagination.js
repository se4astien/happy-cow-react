import React from "react";
import { Link } from "react-router-dom";

export default function Pagination({
  productsPerPage,
  totalProducts,
  paginate
}) {
  const pageNumbers = [];

  for (let i = 1; i <= Math.ceil(totalProducts / productsPerPage); i++) {
    pageNumbers.push(i);
  }

  return (
    <ul className="pagination">
      {pageNumbers.map(number => (
        <li key={number}>
          <Link to="#" onClick={() => paginate(number)}>
            {number}
          </Link>
        </li>
      ))}
    </ul>
  );
}
