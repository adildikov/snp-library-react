import React from "react";
import BookList from "../BookList";
import Title from "../Title";
import "./style.css";

export default React.memo(function Main({ books }) {
  return (
    <div className="main_wrapper">
      <Title title="This is a main page of the library" />
      <BookList books={books} />
    </div>
  );
});
