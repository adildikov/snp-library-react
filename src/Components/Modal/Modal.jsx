import React from "react";

import Portal from "./Portal";

import { ImCross } from "react-icons/im";

import styles from "./style.module.scss";

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
          <div className={styles.modal_overlay}>
            <div className={styles.modal_wrapper}>
              <div className={styles.modal_header}>
                <div className={styles.modal_title}>{title}</div>
                <ImCross onClick={onCancel} className={styles.close} />
              </div>
              <div className={styles.modal_body}>{children}</div>
              <div className={styles.modal_footer}>
                <button onClick={onCancel} className={styles.cancelBtn}>
                  Cancel
                </button>
                <button onClick={onSubmit} className={styles.submitBtn}>
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
