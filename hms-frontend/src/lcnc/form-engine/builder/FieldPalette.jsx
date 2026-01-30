import React from "react";

const FieldPalette = ({ onAdd }) => {
  const fields = ["Text", "Number", "Date", "Dropdown"];

  return (
    <div className="palette">
      <h4>Fields</h4>
      {fields.map(f => (
        <button key={f} onClick={() => onAdd(f)}>
          + {f}
        </button>
      ))}
    </div>
  );
};

export default FieldPalette;
