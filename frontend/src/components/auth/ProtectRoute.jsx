import React from "react";
import { Navigate } from "react-router-dom";
import { useSelector } from "react-redux";

const ProtectRoute = ({ element }) => {
  const { userInfo } = useSelector((state) => state.adminReducer);

  // Redirect to login if user is not authenticated
  if (!userInfo) {
    return <Navigate to="/admin/login" replace />;
  }

  // Check role and access status
  if (userInfo.role === "admin" || userInfo.role === "sub admin") {
    if (userInfo.accessStatus === "block") {
      return <Navigate to="/user/block" replace />;
    }
    return element;
  } else {
    if (userInfo.accessStatus === "block") {
      return <Navigate to="/user/block" replace />;
    }
    return <Navigate to="/" replace />;
  }
};

export default ProtectRoute;
