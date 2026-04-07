import React, { useContext } from "react";
import { Navigate, Outlet } from "react-router";
import {useAuth } from "../context/AuthContext";

const AuthProtected = () => {
  let { loggedInUsers } = useAuth();
  if (loggedInUsers) {
    return <Navigate to="/" />
  }
  return <Outlet />;
};

export default AuthProtected;
