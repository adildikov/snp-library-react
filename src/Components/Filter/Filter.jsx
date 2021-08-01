import React from "react";
import "./style.css";

export default function Filter({
  onSearchSubmit,
  onInputChange,
  currentFilter,
  onKeyPressed,
}) {
  return (
    <div className="filter_wrapper">
      <input
        type="text"
        className="filter__input"
        placeholder="Library search"
        value={currentFilter}
        onChange={onInputChange}
        onKeyPress={onKeyPressed}
      />
      <button onClick={onSearchSubmit} className="filter__submit">
        Search
      </button>
    </div>
  );
}
