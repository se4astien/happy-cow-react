import React from "react";

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
          <a onClick={() => paginate(number)} href="#">
            {number}
          </a>
        </li>
      ))}
    </ul>
  );
}
