import { createContext, useState } from "react";

export const AuthContext = createContext();

const AuthContextProvider = (props) => {
  const [isUserAuthenticated, setIsUserAuthenticated] = useState(false);

  const login = () => {
    setIsUserAuthenticated(true);
  };

  const logout = () => {
    setIsUserAuthenticated(false);
  };

  return (
    <AuthContext.Provider value={{ isUserAuthenticated, login, logout }}>
      {props.children}
    </AuthContext.Provider>
  );
};

export default AuthContextProvider;
