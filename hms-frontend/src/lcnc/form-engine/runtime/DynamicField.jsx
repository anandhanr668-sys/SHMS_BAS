import React from "react";

const DynamicField = ({ field, value, error, onChange }) => {
  const handleInput = (e) => {
    onChange(field.name, e.target.value);
  };

  return (
    <div className="dynamic-field">
      <label>
        {field.label} {field.required && "*"}
      </label>

      {field.type === "Text" && (
        <input value={value || ""} onChange={handleInput} />
      )}

      {field.type === "Number" && (
        <input type="number" value={value || ""} onChange={handleInput} />
      )}

      {field.type === "Date" && (
        <input type="date" value={value || ""} onChange={handleInput} />
      )}

      {field.type === "Dropdown" && (
        <select value={value || ""} onChange={handleInput}>
          <option value="">Select</option>
          {field.options?.map((opt) => (
            <option key={opt} value={opt}>
              {opt}
            </option>
          ))}
        </select>
      )}

      {error && <div className="error">{error}</div>}
    </div>
  );
};

export default DynamicField;
