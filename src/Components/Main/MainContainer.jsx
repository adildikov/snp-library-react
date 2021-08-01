import React, { useCallback, useMemo, useState } from "react";
import Main from "./Main";
import { useDispatch, useSelector } from "react-redux";
import { getBooks } from "../../redux/books/selectors";
import { addBook } from "../../redux/books/actions";
import { getCurrentFilter } from "../../redux/currentFilter/selectors";

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

  const handleToggleModalOpen = useCallback(() => {
    setModalOpen(!isModalOpen);
  }, [isModalOpen]);

  const handleSubmit = useCallback(() => {
    dispatch(addBook(newBook));
    setModalOpen(false);
    editNewBook({
      title: "",
      author: "",
      description: "",
      image: "",
    });
  }, [dispatch, newBook, setModalOpen]);

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
        book.title.includes(currentFilter)
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
    />
  );
}
