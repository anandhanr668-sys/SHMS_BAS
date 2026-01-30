// src/utils/validators.js

export const isEmpty = (value) =>
  value === undefined || value === null || value === "";

export const isEmail = (email) =>
  /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);

export const validateRequiredFields = (payload, fields = []) => {
  for (const field of fields) {
    if (isEmpty(payload[field])) {
      throw new Error(`${field} is required`);
    }
  }
};
