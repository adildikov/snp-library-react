import React, { useCallback } from "react";
import Modal from "./Modal";
import "./style.css";

export default React.memo(function ModalContainer({
  isOpen,
  onToggleModalOpen,
}) {
  const handleSubmit = useCallback(() => {
    onToggleModalOpen(false);
  }, [onToggleModalOpen]);

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
      />
      <input className="body__input" type="text" placeholder="Author" />
      <textarea
        className="body__textarea"
        type="text"
        placeholder="Description of the book"
      />
      <input
        className="body__input"
        type="text"
        placeholder="Cover of the book(enter url)"
      />
    </Modal>
  );
});
