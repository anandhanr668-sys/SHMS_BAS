import React, { useState } from "react";
import FieldPalette from "./FieldPalette";
import DragCanvas from "./DragCanvas";
import FieldProperties from "./FieldProperties";
import FieldPreview from "./FieldPreview";

const FormBuilder = () => {
  const [fields, setFields] = useState([]);
  const [activeField, setActiveField] = useState(null);

  const addField = (type) => {
    const newField = {
      id: Date.now(),
      type,
      label: `${type} Field`,
      required: false,
    };
    setFields([...fields, newField]);
  };

  const updateField = (updated) => {
    setFields(fields.map(f => (f.id === updated.id ? updated : f)));
    setActiveField(updated);
  };

  return (
    <div className="form-builder">
      <FieldPalette onAdd={addField} />
      <DragCanvas fields={fields} onSelect={setActiveField} />
      <FieldProperties field={activeField} onChange={updateField} />
      <FieldPreview fields={fields} />
    </div>
  );
};

export default FormBuilder;
