import React, { useCallback, useEffect } from "react";
import Filter from "./Filter";
import queryString from "query-string";
import { useHistory, useLocation } from "react-router-dom";

export default React.memo(function FilterContainer({
  currentFilter,
  onChangeCurrentFilter,
}) {
  const history = useHistory();
  const location = useLocation();

  useEffect(() => {
    const queryStringFilter = queryString.parse(location.search).search;
    if (queryStringFilter) {
      onChangeCurrentFilter(queryStringFilter);
    }
  }, [location.search, onChangeCurrentFilter]);

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

  const handleInputChange = useCallback(
    (e) => {
      onChangeCurrentFilter(e.target.value);
    },
    [onChangeCurrentFilter]
  );

  return (
    <Filter
      currentFilter={currentFilter}
      onSearchSubmit={handleSearchSubmit}
      onInputChange={handleInputChange}
      onKeyPressed={handleKeyPressed}
    />
  );
});
