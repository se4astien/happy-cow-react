import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

// import Components
import Header from "./components/Header";
import Footer from "./components/Footer";

// import Containers
import Home from "./containers/Home";
import ProductCard from "./containers/ProductCard";

export default function App() {
  return (
    <Router>
      <Header />
      <Switch>
        <Route exact path="/">
          <Home />
        </Route>
        <Route path="/product-card/id:">
          <ProductCard />
        </Route>
      </Switch>
      <Footer />
    </Router>
  );
}
