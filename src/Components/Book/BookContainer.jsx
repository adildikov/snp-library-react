import React, { useCallback, useState } from "react";
import "./style.css";
import Book from "./Book";
import { useDispatch } from "react-redux";
import { editCurrentBookId } from "../../redux/currentBookId/actions";
import { useHistory } from "react-router-dom";
import { editBook } from "../../redux/books/actions";
import { deleteBookThunk } from "../../redux/books/thunks";

export default React.memo(function BookContainer({
  id,
  title,
  author,
  bookCover,
  description,
}) {
  const dispatch = useDispatch();
  const history = useHistory();

  const [newBook, editNewBook] = useState({
    title: title,
    author: author,
    description: description,
    image: bookCover,
  });
  const [isModalOpen, setModalOpen] = useState(false);

  const handleBookClick = useCallback(() => {
    dispatch(editCurrentBookId(id));
    history.push(`/books/${id}`);
  }, [dispatch, id, history]);

  const handleDeleteBookClick = useCallback(() => {
    dispatch(deleteBookThunk(id));
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

  const handleCancel = useCallback(() => {
    setModalOpen(false);
  }, [setModalOpen]);

  return (
    <Book
      title={title}
      author={author}
      bookCover={bookCover}
      isModalOpen={isModalOpen}
      onSubmit={handleSubmit}
      onCancel={handleCancel}
      onToggleModalOpen={handleToggleModalOpen}
      onDeleteBookClick={handleDeleteBookClick}
      onBookClick={handleBookClick}
      onEditNewBook={handleEditNewBook}
      newBook={newBook}
    />
  );
});
