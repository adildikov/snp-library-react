import React from "react";
import Title from "../Title";
import "./style.css";

export default React.memo(function Display({ book }) {
  return (
    <div className="display_wrapper">
      <Title title={"There is info about «" + book.title + "»"} />
      <h1>Book</h1>
    </div>
  );
});
