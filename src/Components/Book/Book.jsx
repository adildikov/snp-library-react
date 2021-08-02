import React from "react";
import { isValidImage, stringCutIfNeeded } from "../../utils";
import "./style.css";
import defaultCover from "../../assets/defaultCover.jpg";
import { FaTrashAlt, FaEdit } from "react-icons/fa";
import ModalContainer from "../Modal/ModalContainer";

export default React.memo(function Book({
  title,
  author,
  bookCover,
  onBookClick,
  onDeleteBookClick,
  newBook,
  onEditNewBook,
  isModalOpen,
  onToggleModalOpen,
  onSubmit,
  onCancel,
}) {
  return (
    <li className="book_wrapper">
      <img
        onClick={onBookClick}
        src={isValidImage(bookCover) ? bookCover : defaultCover}
        alt="Cover of the book"
        className="book__bookCover"
      />
      <div className="book_info">
        <div className="badges">
          <FaTrashAlt onClick={onDeleteBookClick} className="badges__delete" />
          <FaEdit onClick={onToggleModalOpen} className="badges__edit" />
        </div>
        <p onClick={onBookClick} className="book__titleSmall">
          {title.length < 18 ? title : stringCutIfNeeded(title, 18)}
        </p>
        <p onClick={onBookClick} className="book__author">
          {stringCutIfNeeded(author, 25)}
        </p>
      </div>
      <ModalContainer
        newBook={newBook}
        onSubmit={onSubmit}
        onCancel={onCancel}
        onEditNewBook={onEditNewBook}
        isOpen={isModalOpen}
        title={"Edit info about book"}
      />
    </li>
  );
});
