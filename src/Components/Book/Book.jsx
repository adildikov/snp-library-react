import React from "react";
import { isValidImage, stringCutIfNeeded } from "../../utils";
import "./style.css";
import defaultCover from "../../assets/defaultCover.jpg";

export default React.memo(function Book({
  id,
  title,
  author,
  bookCover,
  onBookClick,
}) {
  return (
    <li onClick={onBookClick} className="book_wrapper">
      <img
        src={isValidImage(bookCover) ? bookCover : defaultCover}
        alt="Cover of the book"
        className="book__bookCover"
      />
      <div className="book_info">
        <p className="book__titleSmall">
          {title.length < 18 ? title : stringCutIfNeeded(title, 18)}
        </p>
        <p className="book__author">{stringCutIfNeeded(author, 30)}</p>
      </div>
    </li>
  );
});
