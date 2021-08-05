import React from "react";
import { isValidImage, stringCutIfNeeded } from "../../utils";

import ModalContainer from "../Modal/ModalContainer";

import defaultCover from "../../assets/defaultCover.jpg";
import { FaTrashAlt, FaEdit } from "react-icons/fa";
import styles from "./style.module.scss";

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
    <li className={styles.book_wrapper}>
      <img
        onClick={onBookClick}
        src={isValidImage(bookCover) ? bookCover : defaultCover}
        alt="Cover of the book"
        className={styles.book__bookCover}
      />
      <div className={styles.book_info}>
        <div className={styles.badges}>
          <FaTrashAlt
            onClick={onDeleteBookClick}
            className={styles.badges__delete}
          />
          <FaEdit onClick={onToggleModalOpen} className={styles.badges__edit} />
        </div>
        <p onClick={onBookClick} className={styles.book__titleSmall}>
          {title.length < 18 ? title : stringCutIfNeeded(title, 18)}
        </p>
        <p onClick={onBookClick} className={styles.book__author}>
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
