import React, { useCallback, useState } from "react";
import Main from "./Main";
import { useSelector } from "react-redux";
import { getBooks } from "../../redux/books/selectors";

export default function MainContainer() {
  const books = useSelector(getBooks);
  const [isModalOpen, setModalOpen] = useState(false);

  const handleToggleModalOpen = useCallback(() => {
    setModalOpen(!isModalOpen);
  }, [isModalOpen]);

  return (
    <Main
      books={books}
      isModalOpen={isModalOpen}
      onToggleModalOpen={handleToggleModalOpen}
    />
  );
}
