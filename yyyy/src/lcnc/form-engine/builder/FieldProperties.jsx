import React from "react";

const FieldProperties = ({ field, onChange }) => {
  if (!field) {
    return (
      <aside style={styles.panel}>
        <p>Select a field</p>
      </aside>
    );
  }

  return (
    <aside style={styles.panel}>
      <h3>⚙ Properties</h3>

      <label>Label</label>
      <input
        value={field.label}
        onChange={(e) =>
          onChange({ ...field, label: e.target.value })
        }
      />

      <label>
        <input
          type="checkbox"
          checked={field.required}
          onChange={(e) =>
            onChange({ ...field, required: e.target.checked })
          }
        />
        Required
      </label>
    </aside>
  );
};

const styles = {
  panel: {
    padding: 16,
    background: "#f1f5f9",
    display: "flex",
    flexDirection: "column",
    gap: 10,
  },
};

export default FieldProperties;

