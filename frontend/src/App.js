// frontend/src/App.js
import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Header from "./components/Header";
import HomePage from "./pages/HomePage";
import ProductPage from "./pages/ProductPage";

function App() {
  return (
    <Router>
      <Header />
      <Switch>
        <Route path="/" component={HomePage} exact />
        <Route path="/product" component={ProductPage} />
      </Switch>
    </Router>
  );
}

export default App;
