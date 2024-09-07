import React, { createContext, useState, useContext, useEffect } from "react";
import axios from "axios";

// Create the Cart Context
const CartContext = createContext();

// Custom hook to use the Cart Context
export const useCartContext = () => useContext(CartContext);

// Cart Provider Component
const CartProvider = ({ children }) => {
  const [cartItems, setCartItems] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  // Fetch cart items from the API
 const fetchCartItems = async () => {
  setLoading(true);
  setError(null);
  try {
    const response = await axios.get("http://localhost:8000/cart");
    console.log("Fetched cart items:", response.data); // Log the fetched data
    if (Array.isArray(response.data)) {
      setCartItems(await response.data);
    } else {
      setError("Unexpected response format: not an array");
    }
  } catch (error) {
    setError("Error fetching cart items: " + error.message);
  } finally {
    setLoading(false);
  }
};


  // Add an item to the cart
  const addItemToCart = async (product) => {
    // Check if the item is already in the cart
    const existingItem = cartItems.find((item) => item.id === product.id);
    if (existingItem) {
      alert('This item is already in the cart.');
      return;
    }

    try {
      const response = await axios.post("http://localhost:8000/cart", product);
      fetchCartItems();
      alert("new product added.");
    } catch (error) {
      setError("Error adding item to cart: " + error.message);
    }
  };

  // Update the quantity of an item in the cart
  const updateItemQuantity = (id, quantity) => {
    setCartItems(prevItems => {
      const itemIndex = prevItems.findIndex(item => item.id === id);
      if (itemIndex !== -1) {
        // Item exists, update quantity
        const updatedItems = [...prevItems];
        updatedItems[itemIndex].quantity = quantity;
        return updatedItems;
      } else {
        // Item does not exist, handle this case
        return [...prevItems, { id, quantity, /* other item properties */ }];
      }
    });
  };
  

  // Remove an item from the cart
  const removeItemFromCart = async (itemId) => {
    try {
      await axios.delete(`http://localhost:8000/cart/${itemId}`);
      // Update the state locally after successful deletion
      setCartItems((prevItems) =>
        prevItems.filter((item) => item.id !== itemId)
      );
    } catch (error) {
      setError("Error removing item from cart: " + error.message);
    }
  };

  // Load cart items when the component mounts
  useEffect(() => {
    fetchCartItems();
  }, []);

  // Context value that will be supplied to any descendants of this provider
  const value = {
    cartItems,
    loading,
    error,
    fetchCartItems,
    addItemToCart,
    updateItemQuantity,
    removeItemFromCart,
  };

  return <CartContext.Provider value={value}>{children}</CartContext.Provider>;
};

export default CartProvider;
