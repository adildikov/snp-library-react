import React, { useCallback, useMemo } from "react";
import { useSelector } from "react-redux";
import { useHistory } from "react-router-dom";

import Display from "./Display";
import DisplayError from "./DisplayError";
import { getBooks } from "../../redux/library/books/selectors";
import { getCurrentBookId } from "../../redux/library/currentBookId/selectors";

export default function DisplayContainer() {
  const id = useSelector(getCurrentBookId);
  const books = useSelector(getBooks);
  const history = useHistory();

  const currentBook = useMemo(() => {
    return books.filter((book) => book.id === id)[0];
  }, [books, id]);

  const handleBackToLibraryClick = useCallback(() => {
    history.push("/books");
  }, [history]);

  return currentBook ? (
    <Display
      book={currentBook}
      onBackToLibraryClick={handleBackToLibraryClick}
    />
  ) : (
    <DisplayError />
  );
}
