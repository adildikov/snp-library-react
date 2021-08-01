import React, { useCallback, useEffect, useState } from "react";
import Filter from "./Filter";
import queryString from "query-string";
import { useHistory, useLocation } from "react-router-dom";
import { useDispatch } from "react-redux";
import { editCurrentFilter } from "../../redux/currentFilter/actions";

export default function FilterContainer() {
  const history = useHistory();
  const location = useLocation();
  const dispatch = useDispatch();

  const [currentFilter, changeCurrentFilter] = useState("");

  useEffect(() => {
    const queryStringFilter = queryString.parse(location.search).search;
    if (queryStringFilter) {
      changeCurrentFilter(queryStringFilter);
    }
  }, [location.search, changeCurrentFilter]);

  const handleSearchSubmit = useCallback(() => {
    dispatch(editCurrentFilter(currentFilter));
    if (!currentFilter.length) {
      history.push("/books");
    } else {
      history.push(`/books/?search=${currentFilter}`);
    }
  }, [dispatch, currentFilter, history]);

  const handleKeyPressed = useCallback(
    (e) => {
      if (e.key === "Enter") {
        dispatch(editCurrentFilter(currentFilter));
        if (!currentFilter.length) {
          history.push("/books");
        } else {
          history.push(`/books/?search=${currentFilter}`);
        }
      }
    },
    [dispatch, currentFilter, history]
  );

  const handleInputChange = useCallback(
    (e) => {
      changeCurrentFilter(e.target.value);
    },
    [changeCurrentFilter]
  );

  return (
    <Filter
      currentFilter={currentFilter}
      onSearchSubmit={handleSearchSubmit}
      onInputChange={handleInputChange}
      onKeyPressed={handleKeyPressed}
    />
  );
}
