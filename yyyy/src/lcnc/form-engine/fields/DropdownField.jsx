import React from "react";

const DropdownField = ({ label, value, options = [], onChange }) => {
  return (
    <div style={{ marginBottom: 16 }}>
      <label>{label}</label>
      <select
        value={value}
        onChange={(e) => onChange(e.target.value)}
        style={styles.select}
      >
        <option value="">Select</option>
        {options.map((opt) => (
          <option key={opt}>{opt}</option>
        ))}
      </select>
    </div>
  );
};

const styles = {
  select: {
    width: "100%",
    padding: 10,
    borderRadius: 6,
    border: "1px solid #cbd5f5",
  },
};

export default DropdownField;

