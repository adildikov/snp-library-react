import React, { useCallback, useMemo } from "react";
import { useSelector } from "react-redux";
import { useHistory } from "react-router-dom";
import { getBooks } from "../../redux/books/selectors";
import { getCurrentBookId } from "../../redux/currentBookId/selectors";
import Display from "./Display";

export default function DisplayContainer() {
  const id = useSelector(getCurrentBookId);
  const books = useSelector(getBooks);
  const history = useHistory();

  const currentBook = useMemo(() => {
    return books.filter((book) => book.id === id)[0];
  }, [books, id]);

  const handlerBackToLibraryClick = useCallback(() => {
    history.push("/books");
  }, [history]);

  return (
    <Display
      book={currentBook}
      onBackToLibraryClick={handlerBackToLibraryClick}
    />
  );
}
