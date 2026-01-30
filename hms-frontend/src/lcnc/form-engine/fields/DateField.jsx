import React from "react";

const DateField = ({ label, value, required, onChange, error }) => (
  <div className="field">
    <label>
      {label} {required && "*"}
    </label>
    <input
      type="date"
      value={value || ""}
      onChange={(e) => onChange(e.target.value)}
    />
    {error && <span className="error">{error}</span>}
  </div>
);

export default DateField;
