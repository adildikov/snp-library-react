import React, { useCallback, useMemo, useState } from "react";
import Main from "./Main";
import { useDispatch, useSelector } from "react-redux";
import { getBooks } from "../../redux/books/selectors";
import { getCurrentFilter } from "../../redux/currentFilter/selectors";
import { useEffect } from "react";
import { initBooksThunk, addBookThunk } from "../../redux/books/thunks";

export default function MainContainer() {
  const dispatch = useDispatch();

  const books = useSelector(getBooks);
  const currentFilter = useSelector(getCurrentFilter);
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

  const filteredBooks = useMemo(() => {
    return books.filter(
      (book) =>
        book.title.toLowerCase().includes(currentFilter) ||
        book.title.toUpperCase().includes(currentFilter) ||
        book.title.includes(currentFilter) ||
        book.author.toLowerCase().includes(currentFilter) ||
        book.author.toUpperCase().includes(currentFilter) ||
        book.author.includes(currentFilter)
    );
  }, [books, currentFilter]);

  return (
    <Main
      newBook={newBook}
      books={filteredBooks}
      isModalOpen={isModalOpen}
      onToggleModalOpen={handleToggleModalOpen}
      onEditNewBook={handleEditNewBook}
      onSubmit={handleSubmit}
      onCancel={handleCancel}
    />
  );
}
