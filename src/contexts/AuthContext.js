import React, { createContext, useState, useContext, useEffect } from 'react';

const AuthContext = createContext(null);

export const AuthProvider = ({ children }) => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [user, setUser] = useState(null);

  useEffect(() => {
    // Check if user is authenticated (e.g., by checking for a token in localStorage)
    const token = localStorage.getItem('token');
    if (token) {
      // Validate token with your backend
      // For now, we'll just set isAuthenticated to true
      setIsAuthenticated(true);
      setUser({ name: 'John Doe' }); // Replace with actual user data
    }
  }, []);

  const login = (userData) => {
    setIsAuthenticated(true);
    setUser(userData);
    localStorage.setItem('token', 'dummy-token'); // Replace with actual token
  };

  const logout = () => {
    setIsAuthenticated(false);
    setUser(null);
    localStorage.removeItem('token');
  };

  return (
    <AuthContext.Provider value={{ isAuthenticated, user, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => useContext(AuthContext);