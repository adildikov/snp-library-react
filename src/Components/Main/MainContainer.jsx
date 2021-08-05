import React, { useCallback, useState } from "react";
import Main from "./Main";
import { useDispatch, useSelector } from "react-redux";
import { getBooks } from "../../redux/library/books/selectors";
import { useEffect } from "react";
import { initBooksThunk, addBookThunk } from "../../redux/library/books/thunks";

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

  useEffect(() => dispatch(initBooksThunk()), [dispatch]);

  const handleToggleModalOpen = useCallback(() => {
    setModalOpen(!isModalOpen);
  }, [isModalOpen]);

  const handleSubmit = useCallback(() => {
    dispatch(addBookThunk(newBook));
    setModalOpen(false);
    editNewBook({
      title: "",
      author: "",
      description: "",
      image: "",
    });
  }, [dispatch, newBook, setModalOpen]);

  const handleCancel = useCallback(() => {
    setModalOpen(false);
    editNewBook({
      title: "",
      author: "",
      description: "",
      image: "",
    });
  }, [setModalOpen]);

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
      onCancel={handleCancel}
    />
  );
}
