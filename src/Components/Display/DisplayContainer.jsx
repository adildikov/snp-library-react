import React, { useMemo } from "react";
import { useSelector } from "react-redux";
import { getBooks } from "../../redux/books/selectors";
import { getCurrentBookId } from "../../redux/currentBookId/selectors";
import Display from "./Display";

export default function DisplayContainer() {
  const id = useSelector(getCurrentBookId);
  const books = useSelector(getBooks);

  const currentBook = useMemo(() => {
    return books.filter((book) => book.id === id)[0];
  }, [books, id]);

  return <Display book={currentBook} />;
}
