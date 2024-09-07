// AuthContext.js
import React, { createContext, useContext, useState } from 'react';
import axios from 'axios';

// Create a context
const AuthContext = createContext();

// Provider component
export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [error, setError] = useState(null);
  const [success, setSuccess] = useState(null);

  // Function to handle sign up
  const signUp = async (formData) => {
    try {
      const response = await axios.post('http://localhost:8000/users', formData);

      if (response.status === 201) {
        setSuccess('User registered successfully!');
        setUser(response.data); // Update user state
        setError(null);
      }
    } catch (err) {
      setError('Registration failed. Please try again.');
      setSuccess(null);
    }
  };

  // Values provided by the context
  return (
    <AuthContext.Provider value={{ user, signUp, error, success, setError, setSuccess }}>
      {children}
    </AuthContext.Provider>
  );
};

// Custom hook to use AuthContext
export const useAuth = () => useContext(AuthContext);
