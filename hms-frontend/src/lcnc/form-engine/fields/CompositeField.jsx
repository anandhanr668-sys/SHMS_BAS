import React from "react";

const CompositeField = ({ label, fields = [], values = {}, onChange }) => {
  const updateField = (name, value) => {
    onChange({ ...values, [name]: value });
  };

  return (
    <div className="field composite">
      <h4>{label}</h4>

      {fields.map((field) => (
        <div key={field.name}>
          <label>{field.label}</label>
          <input
            value={values[field.name] || ""}
            onChange={(e) => updateField(field.name, e.target.value)}
          />
        </div>
      ))}
    </div>
  );
};

export default CompositeField;
