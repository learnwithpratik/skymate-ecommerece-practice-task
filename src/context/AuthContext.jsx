import { createContext, useContext, useState } from "react";

let Auth = createContext();

export let AuthProvider = ({ children }) => {
  const [registeredUser, setRegisteredUser] = useState(
    JSON.parse(localStorage.getItem("reg users")) || [],
  );
  const [loggedInUsers, setLoggedInUsers] = useState(
    JSON.parse(localStorage.getItem("log user")) || null
  );

  return (
    <Auth.Provider
      value={{
        setRegisteredUser,
        setLoggedInUsers,
        registeredUser,
        loggedInUsers,
      }}
    >
      {children}
    </Auth.Provider>
  );
};

export let useAuth = () => useContext(Auth);
