import React, { useState } from "react";
import FieldPalette from "./FieldPalette";
import DragCanvas from "./DragCanvas";
import FieldProperties from "./FieldProperties";

const FormBuilder = () => {
  // #region agent log
  React.useEffect(() => {
    fetch('http://127.0.0.1:7242/ingest/1abce27b-561a-487e-ae38-0ae97682f617',{method:'POST',headers:{'Content-Type':'application/json'},body:JSON.stringify({location:'FormBuilder.jsx:7',message:'FormBuilder rendering',data:{},timestamp:Date.now(),sessionId:'debug-session',runId:'run1',hypothesisId:'C'})}).catch(()=>{});
  }, []);
  // #endregion

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
    minHeight: "calc(100vh - 200px)",
    background: "#f8fafc",
  },
};

export default FormBuilder;

