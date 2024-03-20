import React from "react";
import { NavLink } from "react-router-dom";

const DashboardMenu = () => {
  return (
    <nav className="flex gap-2 p-3 bg-slate-100">
      <NavLink
        className="default"
        to="/"
      >
        Home
      </NavLink>
      <NavLink
        className="default"
        to="/admin"
      >
        Dashboard
      </NavLink>
      <NavLink
        className="default"
        to="/admin/manage-projects"
      >
        Projects
      </NavLink>
    </nav>
  );
};

export default DashboardMenu;
