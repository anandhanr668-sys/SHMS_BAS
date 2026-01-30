import React from "react";

const LayoutCanvas = ({ layout, setLayout }) => {
  const removeItem = (index) => {
    setLayout(layout.filter((_, i) => i !== index));
  };

  return (
    <div className="layout-canvas">
      <h4>Layout</h4>

      {layout.map((item, index) => (
        <div key={index} className="layout-item">
          <span>{item.type}: {item.field}</span>
          <button onClick={() => removeItem(index)}>✖</button>
        </div>
      ))}
    </div>
  );
};

export default LayoutCanvas;
