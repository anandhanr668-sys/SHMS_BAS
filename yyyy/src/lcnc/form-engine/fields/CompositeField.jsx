import React from "react";

const CompositeField = ({ label, fields, values, onChange }) => {
  return (
    <fieldset style={styles.box}>
      <legend>{label}</legend>

      {fields.map((f) => (
        <input
          key={f.name}
          placeholder={f.label}
          value={values[f.name] || ""}
          onChange={(e) =>
            onChange({
              ...values,
              [f.name]: e.target.value,
            })
          }
          style={styles.input}
        />
      ))}
    </fieldset>
  );
};

const styles = {
  box: {
    marginBottom: 20,
    padding: 12,
    borderRadius: 8,
    border: "1px solid #cbd5f5",
  },
  input: {
    width: "100%",
    padding: 8,
    marginBottom: 8,
  },
};

export default CompositeField;

