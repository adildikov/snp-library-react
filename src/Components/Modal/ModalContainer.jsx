import React, { useCallback } from "react";
import Modal from "./Modal";
import "./style.css";

export default React.memo(function ModalContainer({
  isOpen,
  onToggleModalOpen,
  onEditNewBook,
  title,
  onSubmit,
}) {
  const handleCancel = useCallback(() => {
    onToggleModalOpen(false);
  }, [onToggleModalOpen]);

  return (
    <Modal
      title={title}
      isOpen={isOpen}
      onSubmit={onSubmit}
      onCancel={handleCancel}
    >
      <input
        className="body__input"
        type="text"
        placeholder="Title of the book"
        onChange={(e) => onEditNewBook(e, "title")}
      />
      <input
        className="body__input"
        type="text"
        placeholder="Author"
        onChange={(e) => onEditNewBook(e, "author")}
      />
      <textarea
        className="body__textarea"
        type="text"
        placeholder="Description of the book"
        onChange={(e) => onEditNewBook(e, "description")}
      />
      <input
        className="body__input"
        type="text"
        placeholder="Cover of the book(enter url)"
        onChange={(e) => onEditNewBook(e, "image")}
      />
    </Modal>
  );
});
