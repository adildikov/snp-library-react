import React from "react";
import { NavLink } from "react-router-dom";

import styles from "./style.module.scss";

export default React.memo(function Header({ currentBookId }) {
  return (
    <header className={styles.header_wrapper}>
      <nav>
        <ul className={styles.nav}>
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
