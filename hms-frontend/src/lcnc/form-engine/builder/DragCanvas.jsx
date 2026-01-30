import React from "react";

const DragCanvas = ({ fields, onSelect }) => {
  return (
    <div className="canvas">
      <h4>Form Canvas</h4>
      {fields.map(field => (
        <div
          key={field.id}
          className="canvas-item"
          onClick={() => onSelect(field)}
        >
          {field.label} {field.required && "*"}
        </div>
      ))}
    </div>
  );
};

export default DragCanvas;
