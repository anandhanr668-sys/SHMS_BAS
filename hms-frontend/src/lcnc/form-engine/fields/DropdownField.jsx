import React from "react";

const DropdownField = ({ label, value, options = [], required, onChange, error }) => (
  <div className="field">
    <label>
      {label} {required && "*"}
    </label>
    <select value={value || ""} onChange={(e) => onChange(e.target.value)}>
      <option value="">Select</option>
      {options.map((opt, idx) => (
        <option key={idx} value={opt}>
          {opt}
        </option>
      ))}
    </select>
    {error && <span className="error">{error}</span>}
  </div>
);

export default DropdownField;
