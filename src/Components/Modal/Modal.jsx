import React from "react";
import Portal from "./Portal";
import "./style.css";
import { ImCross } from "react-icons/im";

export default React.memo(function Modal({
  title,
  isOpen,
  onCancel,
  onSubmit,
  children,
}) {
  return (
    <>
      {isOpen && (
        <Portal>
          <div className="modal_overlay">
            <div className="modal_wrapper">
              <div className="modal_header">
                <div className="modal_title">{title}</div>
                <ImCross onClick={onCancel} className="close" />
              </div>
              <div className="modal_body">{children}</div>
              <div className="modal_footer">
                <button onClick={onCancel} className="cancelBtn">
                  Cancel
                </button>
                <button onClick={onSubmit} className="submitBtn">
                  Submit
                </button>
              </div>
            </div>
          </div>
        </Portal>
      )}
    </>
  );
});
