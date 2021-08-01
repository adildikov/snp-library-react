import React from "react";
import { NavLink } from "react-router-dom";
import "./style.css";

export default React.memo(function Header({ currentBookId }) {
  return (
    <header className="header_wrapper">
      <nav>
        <ul className="nav">
          <li>
            <NavLink exact to="/books">
              Home
            </NavLink>
          </li>
          <li>
            <NavLink to={`/books/${currentBookId}?`}>Current book</NavLink>
          </li>
        </ul>
      </nav>
    </header>
  );
});
