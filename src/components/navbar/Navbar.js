import React from "react";
import { NavLink, Outlet } from "react-router-dom";
import NavDropdown from "react-bootstrap/NavDropdown";
import "./navbar.css";
function Navbar() {
  return (
    <>
      <nav className="navTab">
        <span className="logoText">Logo</span>
        {/* <NavLink to="/dashboard/home">Home</NavLink> */}
        <NavDropdown title="Home"   id="nav-dropdown">
          <NavDropdown.Item to="/dashboard/about">About</NavDropdown.Item>
          <NavDropdown.Item to="/dashboard/content">Content</NavDropdown.Item>
        </NavDropdown>
        <NavLink to="/dashboard/task">Task</NavLink>
        <NavLink to="/dashboard/user">User</NavLink>
      </nav>
      <Outlet />
    </>
  );
}

export default Navbar;
