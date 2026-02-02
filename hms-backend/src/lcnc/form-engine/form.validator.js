// src/lcnc/form-engine/form.validator.js

const validateFormData = (fields, data) => {
  const errors = [];

  fields.forEach((field) => {
    const value = data[field.key];

    if (field.required && (value === undefined || value === '')) {
      errors.push(`${field.label} is required`);
    }

    if (field.type === 'number' && value && isNaN(value)) {
      errors.push(`${field.label} must be a number`);
    }

    if (field.type === 'select' && field.options && !field.options.includes(value)) {
      errors.push(`${field.label} has invalid value`);
    }
  });

  return errors;
};

module.exports = {
  validateFormData,
};
