import React from "react";

const Modal = ({ title, children, onClose }) => {
  return (
    <div style={styles.overlay}>
      <div style={styles.modal}>
        <header style={styles.header}>
          <h3>{title}</h3>
          <button onClick={onClose}>✕</button>
        </header>

        <div>{children}</div>
      </div>
    </div>
  );
};

const styles = {
  overlay: {
    position: "fixed",
    inset: 0,
    background: "rgba(0,0,0,0.4)",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },
  modal: {
    background: "white",
    padding: 20,
    borderRadius: 10,
    width: 400,
  },
  header: {
    display: "flex",
    justifyContent: "space-between",
    marginBottom: 10,
  },
};

export default Modal;

