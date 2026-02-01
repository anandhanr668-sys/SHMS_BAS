import React, { useState } from "react";
import FieldPalette from "./FieldPalette";
import DragCanvas from "./DragCanvas";
import FieldProperties from "./FieldProperties";

const FormBuilder = () => {
  const [fields, setFields] = useState([]);
  const [selectedField, setSelectedField] = useState(null);

  const addField = (type) => {
    const newField = {
      id: Date.now(),
      type,
      label: `${type} field`,
      required: false,
    };
    setFields([...fields, newField]);
  };

  const updateField = (updated) => {
    setFields(fields.map(f => (f.id === updated.id ? updated : f)));
    setSelectedField(updated);
  };

  return (
    <div style={styles.wrapper}>
      <FieldPalette onAdd={addField} />
      <DragCanvas
        fields={fields}
        onSelect={setSelectedField}
      />
      <FieldProperties
        field={selectedField}
        onChange={updateField}
      />
    </div>
  );
};

const styles = {
  wrapper: {
    display: "grid",
    gridTemplateColumns: "220px 1fr 260px",
    height: "100vh",
    background: "#f8fafc",
  },
};

export default FormBuilder;

