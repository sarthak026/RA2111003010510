// src/App.js
import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import AllProductsPage from './pages/AllProductsPage';
import ProductDetailsPage from './pages/ProductDetailsPage';

const App = () => {
  return (
    <Router>
      <div className="app">
        <Switch>
          <Route path="/" exact component={AllProductsPage} />
          <Route path="/product/:productId" component={ProductDetailsPage} />
        </Switch>
      </div>
    </Router>
  );
};

export default App;
