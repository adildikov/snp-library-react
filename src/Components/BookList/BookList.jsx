import React from "react";
import "./style.css";
import BookContainer from "../Book/BookContainer";

export default React.memo(function BookList({ books }) {
  return (
    <ul className="BookList_wrapper">
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
