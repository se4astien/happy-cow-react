import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

// import Components
import Header from "./components/Header";
import Footer from "./components/Footer";

// import Containers
import Products from "./containers/Products";
import ProductsSearch from "./containers/ProductsSearch";
import CardProductDetails from "./containers/CardProductDetails";

export default function App() {
  return (
    <Router>
      <Header />
      <Switch>
        <Route exact path="/">
          <Products />
        </Route>
        <Route path="/products-search/:city">
          <ProductsSearch />
        </Route>
        <Route path="/card-product-details/:id">
          <CardProductDetails />
        </Route>
      </Switch>
      <Footer />
    </Router>
  );
}
