import React from "react";
import "./style.css";
import books from "./mockBooks";
import Book from "../Book/Book";

export default function BookList() {
  return (
    <ul className="BookList_wrapper">
      {books.map((book) => (
        <Book
          key={book.id}
          id={book.id}
          title={book.title}
          author={book.author}
          description={book.description}
        />
      ))}
    </ul>
  );
}
