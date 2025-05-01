import { createContext, useState } from "react";

export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [authData, setAuthData] = useState({});
  const [allBlogs, setAllBlogs]=useState(null);

  return (
    <AuthContext.Provider value={{ authData, setAuthData, allBlogs, setAllBlogs }}>
      {children}
    </AuthContext.Provider>
  );
};
