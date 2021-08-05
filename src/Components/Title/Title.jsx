import React from "react";

import styles from "./style.module.scss";

export default React.memo(function Title({ title }) {
  return <h1 className={styles.header__title}>{title}</h1>;
});
