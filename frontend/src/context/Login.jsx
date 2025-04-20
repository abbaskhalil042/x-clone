import { createContext, useEffect, useState } from "react";

export const LoginContext = createContext();

export const LoginProvider = ({ children }) => {
  const [loginToken, setLoginToken] = useState(null); // better to initialize with null instead of ""
  const [user, setUser] = useState(null);

  useEffect(() => {
    const token = localStorage.getItem("token");
    const userIcon = localStorage.getItem("username");
    const parseUserName=JSON.parse(userIcon)
    if (token && userIcon) {
      setLoginToken(token);
      setUser(parseUserName);
    }
  }, []);

  return (
    <LoginContext.Provider value={{ loginToken, setLoginToken, user, setUser }}>
      {children}
    </LoginContext.Provider>
  );
};
