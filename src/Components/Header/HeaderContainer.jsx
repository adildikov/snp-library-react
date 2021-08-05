import React from "react";
import { useSelector } from "react-redux";
import { getCurrentBookId } from "../../redux/library/currentBookId/selectors";
import Header from "./Header";
import "./style.css";

export default function HeaderContainer() {
  const currentBookId = useSelector(getCurrentBookId);
  return <Header currentBookId={currentBookId} />;
}
