import React from "react";

const NumberField = ({ label, value, required, onChange, error }) => (
  <div className="field">
    <label>
      {label} {required && "*"}
    </label>
    <input
      type="number"
      value={value || ""}
      onChange={(e) => onChange(e.target.value)}
    />
    {error && <span className="error">{error}</span>}
  </div>
);

export default NumberField;
