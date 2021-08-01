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
}) {
  return (
    <div className="main_wrapper">
      <Title title="This is a main page of the library" />
      <button className="addBookBtn" onClick={onToggleModalOpen}>
        <FaPlus className="addBookBtn__icon" />
        <p className="addBookBtn__text">Add new book</p>
      </button>
      <ModalContainer
        isOpen={isModalOpen}
        onToggleModalOpen={onToggleModalOpen}
      />
      <BookList books={books} />
    </div>
  );
});
