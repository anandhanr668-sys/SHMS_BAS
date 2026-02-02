// src/utils/validators.js

const isEmail = (email) => {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
};

const isPhone = (phone) => {
  return /^[6-9]\d{9}$/.test(phone);
};

const isRequired = (value) => {
  return value !== undefined && value !== null && value !== '';
};

module.exports = {
  isEmail,
  isPhone,
  isRequired,
};
