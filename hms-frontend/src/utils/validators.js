export const isRequired = (value) =>
  value !== undefined && value !== null && value !== "";

export const isNumber = (value) =>
  !isNaN(value) && value !== "";

export const minLength = (value, length) =>
  value && value.length >= length;

export const isEmail = (value) =>
  /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value);
