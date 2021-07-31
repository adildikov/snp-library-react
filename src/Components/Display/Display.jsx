import React from "react";
import Title from "../Title";
import "./style.css";

export default function Display() {
  return (
    <div className="display_wrapper">
      <Title title={"There is info about"} />
      <h1>Book</h1>
    </div>
  );
}
