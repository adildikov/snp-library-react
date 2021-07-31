import React from "react";
import "./style.css";

export default function Header() {
  return (
    <header className="header_wrapper">
      <nav>
        <ul className="nav">
          <li>
            <a href="/">Home</a>
          </li>
          <li>
            <a href="/books">Books</a>
          </li>
        </ul>
      </nav>
    </header>
  );
}
