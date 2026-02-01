import React from "react";

const CheckboxField = ({ label, checked, onChange }) => {
  return (
    <div style={{ marginBottom: 16 }}>
      <label>
        <input
          type="checkbox"
          checked={checked}
          onChange={(e) => onChange(e.target.checked)}
        />{" "}
        {label}
      </label>
    </div>
  );
};

export default CheckboxField;

