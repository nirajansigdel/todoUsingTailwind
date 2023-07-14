import React from "react";
import Sidebar from "./Sidebar";

const Layout = ({ children }) => {
  return (
    <div className="flex background space-x-10">
      <Sidebar />
      <div>{children}</div>
    </div>
  );
};
export default Layout;
