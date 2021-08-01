import React, { useCallback, useMemo, useState } from "react";
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
  const [currentFilter, changeCurrentFilter] = useState("");

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

  const handleChangeCurrentFilter = useCallback((filter) => {
    changeCurrentFilter(filter);
  }, []);

  const filteredBooks = useMemo(() => {
    return books.filter((book) => book.title.includes(currentFilter));
  }, [books, currentFilter]);

  return (
    <Main
      newBook={newBook}
      currentFilter={currentFilter}
      books={filteredBooks}
      isModalOpen={isModalOpen}
      onToggleModalOpen={handleToggleModalOpen}
      onEditNewBook={handleEditNewBook}
      onSubmit={handleSubmit}
      onChangeCurrentFilter={handleChangeCurrentFilter}
    />
  );
}
