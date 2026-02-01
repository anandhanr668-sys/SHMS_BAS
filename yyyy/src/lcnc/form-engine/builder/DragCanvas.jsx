import React from "react";
import FieldPreview from "./FieldPreview";

const DragCanvas = ({ fields, onSelect }) => {
  return (
    <div style={styles.canvas}>
      <h3>🧩 Form Canvas</h3>

      {fields.length === 0 && (
        <p style={{ opacity: 0.5 }}>Add fields to start building</p>
      )}

      {fields.map(field => (
        <div
          key={field.id}
          style={styles.fieldBox}
          onClick={() => onSelect(field)}
        >
          <FieldPreview field={field} />
        </div>
      ))}
    </div>
  );
};

const styles = {
  canvas: {
    padding: 24,
    background: "#ffffff",
  },
  fieldBox: {
    padding: 12,
    marginBottom: 12,
    border: "1px dashed #cbd5f5",
    borderRadius: 8,
    cursor: "pointer",
  },
};

export default DragCanvas;

