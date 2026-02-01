import React from "react";

const NumberField = ({ label, value, onChange }) => {
  return (
    <div style={{ marginBottom: 16 }}>
      <label>{label}</label>
      <input
        type="number"
        value={value}
        onChange={(e) => onChange(e.target.value)}
        style={styles.input}
      />
    </div>
  );
};

const styles = {
  input: {
    width: "100%",
    padding: 10,
    borderRadius: 6,
    border: "1px solid #cbd5f5",
  },
};

export default NumberField;

