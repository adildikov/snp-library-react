import React from "react";
import { useSelector } from "react-redux";
import { getCurrentBookId } from "../../redux/currentBookId/selectors";
import Header from "./Header";
import "./style.css";

export default function HeaderContainer() {
  const currentBookId = useSelector(getCurrentBookId);
  return <Header currentBookId={currentBookId} />;
}
