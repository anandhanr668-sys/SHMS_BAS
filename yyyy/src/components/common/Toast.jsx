import React, { useEffect } from "react";

const Toast = ({ message, onClose }) => {
  useEffect(() => {
    const t = setTimeout(onClose, 3000);
    return () => clearTimeout(t);
  }, [onClose]);

  return (
    <div style={styles.toast}>
      {message}
    </div>
  );
};

const styles = {
  toast: {
    position: "fixed",
    bottom: 20,
    right: 20,
    background: "#020617",
    color: "white",
    padding: "12px 20px",
    borderRadius: 8,
    boxShadow: "0 10px 30px rgba(0,0,0,0.3)",
  },
};

export default Toast;

