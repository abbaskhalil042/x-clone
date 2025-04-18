import { Children, createContext, useEffect, useState } from "react";

export const LoginContext = createContext({
  token: null,
});

export const LoginProvider = ({ children }) => {
  const [loginToken, setLoginToken] = useState("");

  const getToken = () => {
    const token = localStorage.getItem("token");
    setLoginToken(token);
  };

  useEffect(() => {
    getToken();
  }, []);

  return (
    <LoginContext.Provider value={{loginToken, setLoginToken}}>
      {children}
    </LoginContext.Provider>
  );
};
