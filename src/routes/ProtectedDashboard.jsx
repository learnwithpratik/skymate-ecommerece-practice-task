import React, { useContext } from "react";
import { Navigate, Outlet } from "react-router";
import { useAuth } from "../context/AuthContext";
import { toast } from "react-toastify";

const ProtectedDashboard = () => {
  let { loggedInUsers } = useAuth();
  if (!loggedInUsers) {
    toast.error("unauthorized user");
    return <Navigate to="/auth"/>
  }
  return <Outlet />;
};

export default ProtectedDashboard;
