import React, { useCallback, useEffect, useState } from "react";
import queryString from "query-string";
import { useHistory, useLocation } from "react-router-dom";
import { useDispatch } from "react-redux";

import Filter from "./Filter";
import {
  getFilteredBooksThunk,
  initBooksThunk,
} from "../../redux/library/books/thunks";
import { editCurrentFilter } from "../../redux/library/slice";

export default function FilterContainer() {
  const history = useHistory();
  const location = useLocation();
  const dispatch = useDispatch();

  const [currentFilter, changeCurrentFilter] = useState("");
  const [isSearching, setSearching] = useState(false);

  useEffect(() => {
    const queryStringFilter = queryString.parse(location.search).search;
    if (queryStringFilter) {
      changeCurrentFilter(queryStringFilter);
    }
  }, [location.search, changeCurrentFilter]);

  useEffect(() => {
    if (!isSearching && currentFilter !== "") {
      dispatch(editCurrentFilter(currentFilter));
    }
  }, [dispatch, currentFilter, isSearching]);

  const handleSearchSubmit = useCallback(() => {
    setSearching(false);
    dispatch(editCurrentFilter(currentFilter));
    dispatch(getFilteredBooksThunk(currentFilter));
    if (!currentFilter.length) {
      history.push("/books");
    } else {
      history.push(`/books/?search=${currentFilter}`);
    }
  }, [dispatch, currentFilter, history]);

  const handleKeyPressed = useCallback(
    (e) => {
      if (e.key === "Enter") {
        setSearching(false);
        dispatch(editCurrentFilter(currentFilter));
        dispatch(getFilteredBooksThunk(currentFilter));
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
      setSearching(true);
      changeCurrentFilter(e.target.value);
    },
    [changeCurrentFilter]
  );

  const handleInputClear = useCallback(() => {
    setSearching(false);
    changeCurrentFilter("");
    dispatch(editCurrentFilter(""));
    dispatch(initBooksThunk());
    history.push("/books");
  }, [dispatch, history]);

  return (
    <Filter
      currentFilter={currentFilter}
      isSearching={isSearching}
      onSearchSubmit={handleSearchSubmit}
      onInputChange={handleInputChange}
      onInputClear={handleInputClear}
      onKeyPressed={handleKeyPressed}
    />
  );
}
