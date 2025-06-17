import React from 'react';
import { Navigate } from 'react-router-dom';

const ProtectedRoutes = ({ children }) => {
  const token = localStorage.getItem("token");

  if (!token) {
    // If token is not available, redirect to login
    return <Navigate to="/sign-up" replace />;
  }

  // If token exists, render the protected content
  return children;
};

export default ProtectedRoutes;
