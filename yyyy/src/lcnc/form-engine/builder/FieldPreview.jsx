import React from "react";

const FieldPreview = ({ field }) => {
  return (
    <div>
      <label style={{ fontWeight: 600 }}>
        {field.label}
        {field.required && " *"}
      </label>

      <input
        type={field.type.toLowerCase()}
        disabled
        style={styles.input}
      />
    </div>
  );
};

const styles = {
  input: {
    width: "100%",
    marginTop: 6,
    padding: 8,
    borderRadius: 6,
    border: "1px solid #cbd5f5",
  },
};

export default FieldPreview;

