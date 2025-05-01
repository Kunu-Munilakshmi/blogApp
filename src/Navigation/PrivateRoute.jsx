import React, { useContext,useEffect, useState } from 'react';
import { Navigate } from 'react-router-dom';
import { AuthContext } from '../context/AuthProvider';
import { toast } from 'react-toastify';
const PrivateRoute = ({ children }) => {
  const { authData } = useContext(AuthContext);
  const [redirect, setRedirect] = useState(false);
  useEffect(() => {
    if (!authData || !authData.token) {
      toast.error("Please login first");
       // Delay redirect to give toast time to appear
       const timer = setTimeout(() => setRedirect(true), 100);
       return () => clearTimeout(timer);
    }
  }, [authData]);
  if (!authData || !authData.token) {
    if (redirect) {
      return <Navigate to="/login" replace />;
    }
    return null; // or a loading spinner if you like
  }

  return children;
};

export default PrivateRoute;
