import React, { useState, useEffect } from "react";

export default function SearchTest() {
  const products = [
    "Siri",
    "Alexa",
    "Google",
    "Facebook",
    "Twitter",
    "Linkedin",
    "Sinkedin"
  ];

  // console.log(products); // {...}

  const [searchTerm, setSearchTerm] = useState("");
  const [searchResults, setSearchResults] = useState([]);
  const handleChange = event => {
    setSearchTerm(event.target.value);
  };

  let resultName = "";
  for (let key in products) {
    if (products.hasOwnProperty(key)) {
      resultName = products[key].name;
      console.log(resultName); // name du tableau products
    }
  }

  useEffect(() => {
    const results = products.filter(product =>
      product.toLowerCase().includes(searchTerm)
    );
    setSearchResults(results);
  }, [searchTerm]);

  return (
    <div className="App">
      <input
        type="text"
        placeholder="Search"
        value={searchTerm}
        onChange={handleChange}
      />
      <ul>
        {searchResults.map(item => (
          <li>{item}</li>
        ))}
      </ul>
    </div>
  );
}
