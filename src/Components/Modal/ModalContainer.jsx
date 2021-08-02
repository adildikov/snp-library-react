import React from "react";
import Modal from "./Modal";
import "./style.css";

export default React.memo(function ModalContainer({
  newBook,
  isOpen,
  onEditNewBook,
  title,
  onSubmit,
  onCancel,
}) {
  return (
    <Modal
      title={title}
      isOpen={isOpen}
      onSubmit={onSubmit}
      onCancel={onCancel}
    >
      <input
        className="body__input"
        type="text"
        placeholder="Title of the book"
        value={newBook.title}
        onChange={(e) => onEditNewBook(e, "title")}
      />
      <input
        className="body__input"
        type="text"
        placeholder="Author"
        value={newBook.author}
        onChange={(e) => onEditNewBook(e, "author")}
      />
      <textarea
        className="body__textarea"
        type="text"
        placeholder="Description of the book"
        value={newBook.description}
        onChange={(e) => onEditNewBook(e, "description")}
      />
      <input
        className="body__input"
        type="text"
        placeholder="Cover of the book(enter url)"
        value={newBook.image}
        onChange={(e) => onEditNewBook(e, "image")}
      />
    </Modal>
  );
});
