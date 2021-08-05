import React from "react";

import Title from "../Title";

import styles from "./style.module.scss";

export default function DisplayError() {
  return (
    <div className={styles.display_wrapper}>
      <Title title={"First select a book from the library"} />
    </div>
  );
}
