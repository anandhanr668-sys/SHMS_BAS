export const validateSchema = (schema) => {
  if (!schema?.fields || !Array.isArray(schema.fields)) {
    return { valid: false, error: "Invalid schema structure" };
  }

  for (const field of schema.fields) {
    if (!field.name || !field.type) {
      return {
        valid: false,
        error: "Each field must have name and type",
      };
    }
  }

  return { valid: true };
};

