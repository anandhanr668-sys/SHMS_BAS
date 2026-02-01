import React from "react";

const placeholders = [
  "{{patientName}}",
  "{{age}}",
  "{{diagnosis}}",
];

const PlaceholderPicker = ({ onInsert }) => {
  return (
    <div>
      <h4>🔗 Insert Placeholder</h4>
      {placeholders.map((p) => (
        <button
          key={p}
          onClick={() => onInsert(`New Field: ${p}`)}
          style={styles.button}
        >
          {p}
        </button>
      ))}
    </div>
  );
};

const styles = {
  button: {
    marginRight: 8,
    marginBottom: 8,
    padding: "6px 10px",
    background: "#1e293b",
    color: "white",
    border: "none",
    borderRadius: 6,
    cursor: "pointer",
  },
};

export default PlaceholderPicker;

