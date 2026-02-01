import React from "react";

const DynamicField = ({ field, value, onChange, error }) => {
  const commonProps = {
    value,
    onChange: (e) => onChange(field.name, e.target.value),
    style: styles.input,
  };

  return (
    <div style={styles.wrapper}>
      <label style={styles.label}>
        {field.label}
        {field.required && " *"}
      </label>

      {field.type === "text" && <input {...commonProps} />}
      {field.type === "number" && <input type="number" {...commonProps} />}
      {field.type === "date" && <input type="date" {...commonProps} />}

      {field.type === "dropdown" && (
        <select {...commonProps}>
          <option value="">Select</option>
          {field.options.map((opt) => (
            <option key={opt} value={opt}>
              {opt}
            </option>
          ))}
        </select>
      )}

      {error && <span style={styles.error}>{error}</span>}
    </div>
  );
};

const styles = {
  wrapper: {
    marginBottom: 16,
  },
  label: {
    display: "block",
    marginBottom: 6,
    fontWeight: 600,
  },
  input: {
    width: "100%",
    padding: 10,
    borderRadius: 6,
    border: "1px solid #cbd5f5",
  },
  error: {
    color: "#dc2626",
    fontSize: 13,
  },
};

export default DynamicField;

