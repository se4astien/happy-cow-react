import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

// import Components
import Header from "./components/Header";
import Footer from "./components/Footer";

// import Containers
import Home from "./containers/Home";
import CardRestaurantDetail from "./containers/CardRestaurantDetail";

export default function App() {
  return (
    <Router>
      <Header />
      <Switch>
        <Route exact path="/">
          <Home />
        </Route>
        <Route path="/card-restaurant-detail/:id">
          <CardRestaurantDetail />
        </Route>
      </Switch>
      <Footer />
    </Router>
  );
}
