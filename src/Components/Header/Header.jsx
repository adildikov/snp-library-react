import React from "react";
import { NavLink } from "react-router-dom";
import "./style.css";

export default function Header() {
  return (
    <header className="header_wrapper">
      <nav>
        <ul className="nav">
          <li>
            <NavLink exact to="/">
              Home
            </NavLink>
          </li>
          <li>
            <NavLink to="/current_book">Current book</NavLink>
          </li>
        </ul>
      </nav>
    </header>
  );
}
