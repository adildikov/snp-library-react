import React, { useCallback, useState } from "react";
import { useDispatch } from "react-redux";
import { addBook } from "../../redux/books/actions";
import Modal from "./Modal";
import "./style.css";

export default React.memo(function ModalContainer({
  isOpen,
  onToggleModalOpen,
}) {
  const dispatch = useDispatch();

  const [newBook, editNewBook] = useState({
    title: "",
    author: "",
    description: "",
    image: "",
  });

  const handleSubmit = useCallback(() => {
    dispatch(addBook(newBook));
    onToggleModalOpen(false);
  }, [dispatch, newBook, onToggleModalOpen]);

  const handleCancel = useCallback(() => {
    onToggleModalOpen(false);
  }, [onToggleModalOpen]);

  return (
    <Modal
      title={"Add info about new book"}
      isOpen={isOpen}
      onSubmit={handleSubmit}
      onCancel={handleCancel}
    >
      <input
        className="body__input"
        type="text"
        placeholder="Name of the book"
        onChange={(e) => editNewBook({ ...newBook, title: e.target.value })}
      />
      <input
        className="body__input"
        type="text"
        placeholder="Author"
        onChange={(e) => editNewBook({ ...newBook, author: e.target.value })}
      />
      <textarea
        className="body__textarea"
        type="text"
        placeholder="Description of the book"
        onChange={(e) =>
          editNewBook({ ...newBook, description: e.target.value })
        }
      />
      <input
        className="body__input"
        type="text"
        placeholder="Cover of the book(enter url)"
        onChange={(e) => editNewBook({ ...newBook, image: e.target.value })}
      />
    </Modal>
  );
});
