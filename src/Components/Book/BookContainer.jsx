import React, { useCallback, useState } from "react";
import "./style.css";
import Book from "./Book";
import { useDispatch } from "react-redux";
import { editCurrentBookId } from "../../redux/currentBookId/actions";
import { useHistory } from "react-router-dom";
import { deleteBook, editBook } from "../../redux/books/actions";

export default React.memo(function BookContainer({
  id,
  title,
  author,
  bookCover,
}) {
  const dispatch = useDispatch();
  const history = useHistory();

  const [newBook, editNewBook] = useState({
    title: "",
    author: "",
    description: "",
    image: "",
  });
  const [isModalOpen, setModalOpen] = useState(false);

  const handleBookClick = useCallback(() => {
    dispatch(editCurrentBookId(id));
    history.push(`/books/${id}`);
  }, [dispatch, id, history]);

  const handleDeleteBookClick = useCallback(() => {
    dispatch(deleteBook(id));
  }, [dispatch, id]);

  const handleToggleModalOpen = useCallback(() => {
    setModalOpen(!isModalOpen);
  }, [isModalOpen]);

  const handleEditNewBook = useCallback(
    (e, field) => {
      editNewBook({ ...newBook, [field]: e.target.value });
    },
    [newBook]
  );

  const handleSubmit = useCallback(() => {
    dispatch(editBook(id, newBook));
    setModalOpen(false);
  }, [dispatch, id, newBook, setModalOpen]);

  return (
    <Book
      id={id}
      title={title}
      author={author}
      bookCover={bookCover}
      isModalOpen={isModalOpen}
      onSubmit={handleSubmit}
      onToggleModalOpen={handleToggleModalOpen}
      onDeleteBookClick={handleDeleteBookClick}
      onBookClick={handleBookClick}
      onEditNewBook={handleEditNewBook}
      newBook={newBook}
    />
  );
});
