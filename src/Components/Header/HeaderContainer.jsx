import React from "react";
import { useSelector } from "react-redux";

import Header from "./Header";
import { getCurrentBookId } from "../../redux/library/currentBookId/selectors";

export default function HeaderContainer() {
  const currentBookId = useSelector(getCurrentBookId);
  return <Header currentBookId={currentBookId} />;
}
