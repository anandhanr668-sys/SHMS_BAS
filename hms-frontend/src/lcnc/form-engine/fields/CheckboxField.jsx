import React from "react";

const CheckboxField = ({ label, checked, onChange }) => (
  <div className="field checkbox">
    <label>
      <input
        type="checkbox"
        checked={checked || false}
        onChange={(e) => onChange(e.target.checked)}
      />
      {label}
    </label>
  </div>
);

export default CheckboxField;
