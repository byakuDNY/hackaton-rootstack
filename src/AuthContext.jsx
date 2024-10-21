import { createContext, useState, useContext } from "react";

export const AuthContext = createContext();

export const useAuthContext = () => {
  return useContext(AuthContext);
};

export const AuthContextProvider = ({ children }) => {
  const [authUser, setAuthUser] = useState(
    JSON.parse(localStorage.getItem("token")) || null
  );

  const [userAccounts, setUserAccounts] = useState([]);

  return (
    <AuthContext.Provider
      value={{ authUser, setAuthUser, userAccounts, setUserAccounts }}
    >
      {children}
    </AuthContext.Provider>
  );
};
