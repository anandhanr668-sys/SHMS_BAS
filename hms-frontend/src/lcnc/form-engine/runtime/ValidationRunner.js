export const runValidations = (schema, data) => {
  const errors = {};

  schema.forEach((field) => {
    const value = data[field.name];

    if (field.required && !value) {
      errors[field.name] = "This field is required";
      return;
    }

    if (field.type === "Number" && value && isNaN(value)) {
      errors[field.name] = "Must be a number";
    }

    if (field.minLength && value?.length < field.minLength) {
      errors[field.name] = `Minimum ${field.minLength} characters required`;
    }
  });

  return errors;
};
