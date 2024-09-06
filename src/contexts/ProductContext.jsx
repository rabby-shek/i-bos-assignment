import React, { createContext, useState, useEffect, useContext } from "react";
import axios from "axios";

// Create the Product Context
const ProductContext = createContext();

// Custom hook to use the Product Context
export const useProductContext = () => useContext(ProductContext);

// Product Provider Component
const ProductProvider = ({ children }) => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  // Fetch products from the JSON file or API
  const fetchProducts = async () => {
    setLoading(true);
    setError(null);
    try {
      const response = await axios.get("http://localhost:8000/products"); // Adjust the path if needed
      setProducts(response.data);
    } catch (error) {
      setError("Error fetching products: " + error.message);
    } finally {
      setLoading(false);
    }
  };

  // Load products when the component mounts
  useEffect(() => {
    fetchProducts();
  }, []);

  // Context value that will be supplied to any descendants of this provider
  const value = {
    products,
    loading,
    error,
    fetchProducts,
  };

  return (
    <ProductContext.Provider value={value}>{children}</ProductContext.Provider>
  );
};

export default ProductProvider;
