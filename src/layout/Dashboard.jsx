import React from "react";
import DashboardMenu from "../pages/dashboard/DashboardMenu";
import { Outlet, useLocation } from "react-router-dom";
import PublishedPro from "../pages/dashboard/PublishedPro";

const Dashboard = () => {
  const location = useLocation();

  return (
    <div className="max-w-screen-lg mx-auto">
      <DashboardMenu />
      <Outlet />
      {location.pathname === "/admin" ? <PublishedPro /> : ""}
    </div>
  );
};

export default Dashboard;
