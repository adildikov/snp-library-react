import React, { useCallback, useState } from "react";
import Main from "./Main";
import { useDispatch, useSelector } from "react-redux";
import { getBooks } from "../../redux/books/selectors";
import { addBook } from "../../redux/books/actions";

export default function MainContainer() {
  const dispatch = useDispatch();

  const books = useSelector(getBooks);
  const [isModalOpen, setModalOpen] = useState(false);
  const [newBook, editNewBook] = useState({
    title: "",
    author: "",
    description: "",
    image: "",
  });

  const handleToggleModalOpen = useCallback(() => {
    setModalOpen(!isModalOpen);
  }, [isModalOpen]);

  const handleSubmit = useCallback(() => {
    dispatch(addBook(newBook));
    setModalOpen(false);
  }, [dispatch, newBook, setModalOpen]);

  const handleEditNewBook = useCallback(
    (e, field) => {
      editNewBook({ ...newBook, [field]: e.target.value });
    },
    [newBook]
  );

  return (
    <Main
      newBook={newBook}
      books={books}
      isModalOpen={isModalOpen}
      onToggleModalOpen={handleToggleModalOpen}
      onEditNewBook={handleEditNewBook}
      onSubmit={handleSubmit}
    />
  );
}
