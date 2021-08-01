import React from "react";
import { fieldsNames } from "../../utils/mockData";
import Title from "../Title";
import "./style.css";
import defaultCover from "../../assets/defaultCover.jpg";
import { isValidImage } from "../../utils";

export default React.memo(function Display({ book, onBackToLibraryClick }) {
  return (
    <div className="display_wrapper">
      <Title title={"There is info about «" + book.title + "»"} />
      <div className="display_body">
        <div className="info_block">
          <img
            src={isValidImage(book.image) ? book.image : defaultCover}
            alt="Cover of the book"
            className="book__bookCover"
          />
        </div>
        <div className="info_block">
          <span className="info__title">{fieldsNames.title}</span>
          <p className="book__title">{book.title}</p>
        </div>
        <div className="info_block">
          <span className="info__title">{fieldsNames.author}</span>
          <p className="book__author">{book.author}</p>
        </div>
        <div className="info_block">
          <span className="info__title">{fieldsNames.description}</span>
          <p className="book__description">{book.description}</p>
        </div>
        <button onClick={onBackToLibraryClick} className="backBtn">
          Back to the library
        </button>
      </div>
    </div>
  );
});
