import React, { useState } from "react";

const PlaceholderPicker = ({ onAdd }) => {
  const [type, setType] = useState("Text");
  const [field, setField] = useState("");

  const addPlaceholder = () => {
    onAdd((prev) => [...prev, { type, field }]);
    setField("");
  };

  return (
    <div className="placeholder-picker">
      <h4>Add Report Element</h4>

      <select value={type} onChange={(e) => setType(e.target.value)}>
        <option>Text</option>
        <option>Table</option>
        <option>Metric</option>
      </select>

      <input
        placeholder="Field name"
        value={field}
        onChange={(e) => setField(e.target.value)}
      />

      <button onClick={addPlaceholder}>Add</button>
    </div>
  );
};

export default PlaceholderPicker;
