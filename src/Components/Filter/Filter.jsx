import React from "react";

import { ImCross } from "react-icons/im";

import styles from "./style.module.scss";

export default React.memo(function Filter({
  onSearchSubmit,
  onInputChange,
  onInputClear,
  currentFilter,
  onKeyPressed,
  isSearching,
}) {
  return (
    <>
      <div className={styles.filter_wrapper}>
        <input
          type="text"
          className={styles.filter__input}
          placeholder="Library search"
          value={currentFilter}
          onChange={onInputChange}
          onKeyPress={onKeyPressed}
        />
        <ImCross onClick={onInputClear} className={styles.filter__clear} />
        <button onClick={onSearchSubmit} className={styles.filter__submit}>
          Search
        </button>
      </div>
      {currentFilter && !isSearching ? (
        <p className={styles.filterSearch__info}>
          Search result for «{currentFilter}»:
        </p>
      ) : (
        ""
      )}
    </>
  );
});
