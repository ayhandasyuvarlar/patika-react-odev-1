import * as React from "react";
import { NavLink } from "react-router-dom";

function NavList() {
  let activeStyle = {
    textDecoration: "underline",
    color: "yellow",
  };

  return (
    <nav>
      <ul>
        <li>
          <NavLink
            to="/"
            style={({ isActive }) => (isActive ? activeStyle : undefined)}
          >
            Home
          </NavLink>
        </li>
        <li>  
          <NavLink
            to="messages"
            style={({ isActive }) => (isActive ? activeStyle : undefined)}
          >
            Messages
          </NavLink>
        </li>
        <li>
          <NavLink
            to="tasks"
            style={({ isActive }) => (isActive ? activeStyle : undefined)}
          >
            Tasks
          </NavLink>
        </li>
      </ul>
    </nav>
  );
}

export default NavList;
