import React from "react";
import { NavLink } from "react-router-dom";

const DashboardMenu = () => {
  return (
    <nav className="flex gap-2 p-3 bg-slate-100">
      <NavLink
        className={({ isActive }) => (isActive ? "active" : "default")}
        to="/"
      >
        Home
      </NavLink>
      <NavLink
        className={({ isActive }) => (isActive ? "active" : "default")}
        to="/admin"
      >
        Dashboard
      </NavLink>
      <NavLink
        className={({ isActive }) => (isActive ? "active" : "default")}
        to="/manage-project"
      >
        Projects
      </NavLink>
    </nav>
  );
};

export default DashboardMenu;
