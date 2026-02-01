import React from "react";

const fieldTypes = ["Text", "Number", "Date", "Dropdown"];

const FieldPalette = ({ onAdd }) => {
  return (
    <aside style={styles.panel}>
      <h3>➕ Fields</h3>
      {fieldTypes.map(type => (
        <button
          key={type}
          style={styles.button}
          onClick={() => onAdd(type)}
        >
          {type}
        </button>
      ))}
    </aside>
  );
};

const styles = {
  panel: {
    padding: 16,
    background: "#020617",
    color: "white",
  },
  button: {
    width: "100%",
    marginBottom: 10,
    padding: 10,
    background: "#1e293b",
    color: "white",
    border: "none",
    borderRadius: 6,
    cursor: "pointer",
  },
};

export default FieldPalette;

