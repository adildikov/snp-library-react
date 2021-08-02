import React from "react";
import "./style.css";
import { ImCross } from "react-icons/im";

export default React.memo(function Filter({
  onSearchSubmit,
  onInputChange,
  onInputClear,
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
      <ImCross onClick={onInputClear} className={"filter__clear"} />
      <button onClick={onSearchSubmit} className="filter__submit">
        Search
      </button>
    </div>
  );
});
