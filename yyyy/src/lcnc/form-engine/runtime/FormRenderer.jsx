import React, { useState } from "react";
import DynamicField from "./DynamicField";
import { runValidation } from "./ValidationRunner";

const FormRenderer = ({ schema }) => {
  const [formData, setFormData] = useState({});
  const [errors, setErrors] = useState({});

  const handleChange = (name, value) => {
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const validationErrors = runValidation(schema, formData);
    setErrors(validationErrors);

    if (Object.keys(validationErrors).length === 0) {
      alert("✅ Form submitted successfully!");
      console.log("Form Data:", formData);
    }
  };

  return (
    <form onSubmit={handleSubmit} style={styles.form}>
      <h2>{schema.title}</h2>

      {schema.fields.map((field) => (
        <DynamicField
          key={field.name}
          field={field}
          value={formData[field.name] || ""}
          error={errors[field.name]}
          onChange={handleChange}
        />
      ))}

      <button type="submit" style={styles.button}>
        Submit
      </button>
    </form>
  );
};

const styles = {
  form: {
    maxWidth: 500,
    margin: "40px auto",
    padding: 24,
    background: "white",
    borderRadius: 12,
    boxShadow: "0 20px 40px rgba(0,0,0,0.1)",
  },
  button: {
    marginTop: 20,
    width: "100%",
    padding: 12,
    background: "#2563eb",
    color: "white",
    border: "none",
    borderRadius: 8,
    fontWeight: 600,
    cursor: "pointer",
  },
};

export default FormRenderer;

