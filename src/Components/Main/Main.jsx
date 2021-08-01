import React from "react";
import BookList from "../BookList";
import ModalContainer from "../Modal/ModalContainer";
import Title from "../Title";
import "./style.css";
import { FaPlus } from "react-icons/fa";

export default React.memo(function Main({
  books,
  isModalOpen,
  onToggleModalOpen,
  onEditNewBook,
  onSubmit,
  newBook,
}) {
  return (
    <div className="main_wrapper">
      <Title title="This is a main page of the library" />
      <button className="addBookBtn" onClick={onToggleModalOpen}>
        <FaPlus className="addBookBtn__icon" />
        <p className="addBookBtn__text">Add new book</p>
      </button>
      <ModalContainer
        newBook={newBook}
        onSubmit={onSubmit}
        onEditNewBook={onEditNewBook}
        isOpen={isModalOpen}
        onToggleModalOpen={onToggleModalOpen}
        title={"Add info about new book"}
      />
      <BookList books={books} />
    </div>
  );
});
