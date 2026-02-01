export const runValidation = (schema, data) => {
  const errors = {};

  schema.fields.forEach((field) => {
    const value = data[field.name];

    if (field.required && !value) {
      errors[field.name] = "This field is required";
    }

    if (field.minLength && value?.length < field.minLength) {
      errors[field.name] = `Minimum ${field.minLength} characters`;
    }
  });

  return errors;
};

