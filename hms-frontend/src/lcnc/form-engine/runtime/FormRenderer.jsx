import React, { useState } from "react";
import DynamicField from "./DynamicField";
import { runValidations } from "./ValidationRunner";

const FormRenderer = ({ schema = [], onSubmit }) => {
  const [formData, setFormData] = useState({});
  const [errors, setErrors] = useState({});

  const handleChange = (name, value) => {
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const validationErrors = runValidations(schema, formData);
    setErrors(validationErrors);

    if (Object.keys(validationErrors).length === 0) {
      onSubmit(formData);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="runtime-form">
      {schema.map((field) => (
        <DynamicField
          key={field.id}
          field={field}
          value={formData[field.name]}
          error={errors[field.name]}
          onChange={handleChange}
        />
      ))}

      <button type="submit">Submit</button>
    </form>
  );
};

export default FormRenderer;
