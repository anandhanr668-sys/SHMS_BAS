export const validators = {
  required: (value) =>
    value ? null : "This field is required",

  minLength: (value, length) =>
    value && value.length >= length
      ? null
      : `Minimum ${length} characters required`,

  isNumber: (value) =>
    isNaN(value) ? "Must be a number" : null,
};

