import React from "react";

const TextField = ({ label, value, onChange, required, error }) => {
  return (
    <div style={styles.wrapper}>
      <label>{label}{required && " *"}</label>
      <input
        type="text"
        value={value}
        onChange={(e) => onChange(e.target.value)}
        style={styles.input}
      />
      {error && <span style={styles.error}>{error}</span>}
    </div>
  );
};

const styles = {
  wrapper: { marginBottom: 16 },
  input: {
    width: "100%",
    padding: 10,
    borderRadius: 6,
    border: "1px solid #cbd5f5",
  },
  error: { color: "#dc2626", fontSize: 13 },
};

export default TextField;

