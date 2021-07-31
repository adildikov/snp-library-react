import React from "react";
import Main from "./Main";
import { useSelector } from "react-redux";
import { getBooks } from "../../redux/books/selectors";

export default function MainContainer() {
  const books = useSelector(getBooks);

  return <Main books={books} />;
}
