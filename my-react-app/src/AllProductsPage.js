// src/pages/AllProductsPage.js
import React from 'react';
import ProductList from '../components/ProductList';

const AllProductsPage = () => {
  return (
    <div className="all-products-page">
      <h1>All Products</h1>
      <ProductList />
    </div>
  );
};

export default AllProductsPage;
