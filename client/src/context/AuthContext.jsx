import { createContext, useEffect, useState } from "react";

export const AuthContext = createContext(null);

export const AuthProvider = ({ children }) => {
  const [isAuth, setIsAuth] = useState(false);

  useEffect(() => {
    const user = localStorage.getItem("user");

    if (user) {
      setIsAuth(true);
    }
  }, []);

  const logout = () => {
    setIsAuth(false);
    localStorage.removeItem("user");
  };

  const value = {
    isAuth,
    setIsAuth,
    logout,
  };

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
};
