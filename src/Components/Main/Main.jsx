import React from "react";
import BookList from "../BookList";
import Title from "../Title";
import "./style.css";

export default function Main() {
  return (
    <div className="main_wrapper">
      <Title title="This is a main page of the library" />
      <BookList />
    </div>
  );
}
