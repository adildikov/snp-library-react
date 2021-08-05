import React from "react";

import BookContainer from "../Book/BookContainer";

import styles from "./style.module.scss";

export default React.memo(function BookList({ books }) {
  return (
    <ul className={styles.BookList_wrapper}>
      {books.map((book) => (
        <BookContainer
          key={book.id}
          id={book.id}
          bookCover={book.image}
          title={book.title}
          author={book.author}
          description={book.description}
        />
      ))}
    </ul>
  );
});
