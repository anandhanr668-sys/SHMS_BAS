import { FIELD_TYPES } from "./constants";

export const validateSchema = (schema = []) => {
  if (!Array.isArray(schema)) {
    return { valid: false, error: "Schema must be an array" };
  }

  for (const field of schema) {
    if (!field.name || !field.type) {
      return { valid: false, error: "Field must have name and type" };
    }

    if (!FIELD_TYPES.includes(field.type)) {
      return { valid: false, error: `Invalid field type: ${field.type}` };
    }
  }

  return { valid: true };
};
