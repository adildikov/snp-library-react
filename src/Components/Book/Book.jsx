import React from "react";
import "./style.css";

export default function Book({ id, title, author, description }) {
  return (
    <li className="book_wrapper">
      <p className="title">{title}</p>
      <p className="author">{author}</p>
      <p className="description">{description}</p>
    </li>
  );
}
