import React from "react";
import DashNav from "./DashNav";

const Layout = ({ children }) => {
  return (
    <div className="flex min-h-screen">
      {/* Left side - Sidebar */}
      <DashNav />
      {/* Right side - Main Content */}
      <div className="w-3/4 bg-gray-100 p-10">{children}</div>
    </div>
  );
};

export default Layout;
