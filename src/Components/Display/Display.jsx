import React from "react";

import Title from "../Title";

import defaultCover from "../../assets/defaultCover.jpg";
import { isValidImage } from "../../utils";
import { fieldsNames } from "../../utils/mockData";

import styles from "./style.module.scss";

export default React.memo(function Display({ book, onBackToLibraryClick }) {
  return (
    <div className={styles.display_wrapper}>
      <Title title={"There is info about «" + book.title + "»"} />
      <div className={styles.display_body}>
        <div className={styles.info_block}>
          <img
            src={isValidImage(book.image) ? book.image : defaultCover}
            alt="Cover of the book"
            className={styles.book__bookCover}
          />
        </div>
        <div className={styles.info_block}>
          <span className={styles.info__title}>{fieldsNames.title}</span>
          <p className={styles.book__title}>{book.title}</p>
        </div>
        <div className={styles.info_block}>
          <span className={styles.info__title}>{fieldsNames.author}</span>
          <p className={styles.book__author}>{book.author}</p>
        </div>
        <div className={styles.info_block}>
          <span className={styles.info__title}>{fieldsNames.description}</span>
          <p className={styles.book__description}>{book.description}</p>
        </div>
        <button onClick={onBackToLibraryClick} className={styles.backBtn}>
          Back to the library
        </button>
      </div>
    </div>
  );
});
