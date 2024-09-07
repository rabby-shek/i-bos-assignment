import React, { createContext, useContext, useState } from "react";
import axios from "axios";
import Cookies from "js-cookie";

// Create a context
const AuthContext = createContext();

// Provider component
export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [error, setError] = useState(null);
  const [success, setSuccess] = useState(null);

  // Function to handle sign in
  const signIn = async (email, password) => {
    try {
      const response = await axios.get("http://localhost:8000/users", {
        params: { email, password },
      });

      if (response.data.length > 0) {
        setUser(response.data[0]);
        setSuccess("Login successful!");
        setError(null);

        // Store user data in a cookie on sign in only
        Cookies.set("user", JSON.stringify(response.data[0]), { expires: 7 }); // Expires in 7 days

        return { success: true };
      } else {
        setError("Invalid email or password. Please try again.");
        setSuccess(null);
        return { success: false };
      }
    } catch (err) {
      setError("Login failed. Please try again.");
      setSuccess(null);
      return { success: false };
    }
  };

  // Function to handle sign up without storing data in a cookie
  const signUp = async (formData) => {
    try {
      // Check if the user already exists
      const existingUser = await axios.get("http://localhost:8000/users", {
        params: { email: formData.email },
      });

      if (existingUser.data.length > 0) {
        setError("User already registered with this email.");
        setSuccess(null);
        return;
      }

      // Register new user
      const response = await axios.post(
        "http://localhost:8000/users",
        formData
      );

      if (response.status === 201) {
        setSuccess("User registered successfully!");
        setUser(response.data);
        setError(null);
      }
    } catch (err) {
      setError("Registration failed. Please try again.");
      setSuccess(null);
    }
  };

  // Function to handle logout
  const logout = () => {
    setUser(null);
    setSuccess(null);
    setError(null);

    // Remove the user data from the cookie
    Cookies.remove("user");
  };

  // Values provided by the context
  return (
    <AuthContext.Provider
      value={{ user, signIn, signUp, logout, error, success, setError, setSuccess }}
    >
      {children}
    </AuthContext.Provider>
  );
};

// Custom hook to use AuthContext
export const useAuth = () => useContext(AuthContext);
