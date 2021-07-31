import React from "react";
import "./style.css";

export default React.memo(function Title({ title }) {
  return <h1 className="header__title">{title}</h1>;
});
