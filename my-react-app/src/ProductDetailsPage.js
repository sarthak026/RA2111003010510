// src/pages/ProductDetailsPage.js
import React from 'react';
import { useParams } from 'react-router-dom';
import ProductDetails from '../components/ProductDetails';

const ProductDetailsPage = () => {
  const { productId } = useParams(); // Access productId from URL params

  // Fetch product details based on productId from backend API

  return (
    <div className="product-details-page">
      <h1>Product Details</h1>
      {/* Render product details component here */}
      {/* <ProductDetails product={productData} /> */}
    </div>
  );
};

export default ProductDetailsPage;
