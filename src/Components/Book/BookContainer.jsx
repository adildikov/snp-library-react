import React, { useCallback } from "react";
import "./style.css";
import Book from "./Book";
import { useDispatch } from "react-redux";
import { editCurrentBookId } from "../../redux/currentBookId/actions";
import { useHistory } from "react-router-dom";

export default React.memo(function BookContainer({
  id,
  title,
  author,
  bookCover,
}) {
  const dispatch = useDispatch();
  const history = useHistory();

  const handleBookClick = useCallback(() => {
    dispatch(editCurrentBookId(id));
    history.push(`/books/${id}`);
  }, [dispatch, id, history]);

  return (
    <Book
      onBookClick={handleBookClick}
      id={id}
      title={title}
      author={author}
      bookCover={bookCover}
    />
  );
});
