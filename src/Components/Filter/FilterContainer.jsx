import React, { useCallback, useEffect, useState } from "react";
import Filter from "./Filter";
import queryString from "query-string";
import { useHistory, useLocation } from "react-router-dom";

export default function FilterContainer() {
  const history = useHistory();
  const location = useLocation();

  const [currentFilter, changeCurrentFilter] = useState("");

  useEffect(() => {
    const queryStringFilter = queryString.parse(location.search).search;
    if (queryStringFilter) {
      changeCurrentFilter(queryStringFilter);
    }
  }, [location.search]);

  const handleSearchSubmit = useCallback(() => {
    if (!currentFilter.length) {
      history.push("/books");
    } else {
      history.push(`/books/?search=${currentFilter}`);
    }
  }, [currentFilter, history]);

  const handleKeyPressed = useCallback(
    (e) => {
      if (e.key === "Enter") {
        if (!currentFilter.length) {
          history.push("/books");
        } else {
          history.push(`/books/?search=${currentFilter}`);
        }
      }
    },
    [currentFilter, history]
  );

  const handleInputChange = useCallback((e) => {
    changeCurrentFilter(e.target.value);
  }, []);

  return (
    <Filter
      currentFilter={currentFilter}
      onSearchSubmit={handleSearchSubmit}
      onInputChange={handleInputChange}
      onKeyPressed={handleKeyPressed}
    />
  );
}
