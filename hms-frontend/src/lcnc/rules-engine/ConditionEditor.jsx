import React, { useState } from "react";

const ConditionEditor = ({ conditions, setConditions }) => {
  const [field, setField] = useState("");
  const [operator, setOperator] = useState("==");
  const [value, setValue] = useState("");

  const addCondition = () => {
    setConditions([
      ...conditions,
      { field, operator, value }
    ]);
    setField("");
    setValue("");
  };

  return (
    <div className="condition-editor">
      <h4>Conditions (IF)</h4>

      <input
        placeholder="Field (e.g age)"
        value={field}
        onChange={(e) => setField(e.target.value)}
      />

      <select
        value={operator}
        onChange={(e) => setOperator(e.target.value)}
      >
        <option value="==">==</option>
        <option value=">">&gt;</option>
        <option value="<">&lt;</option>
      </select>

      <input
        placeholder="Value"
        value={value}
        onChange={(e) => setValue(e.target.value)}
      />

      <button onClick={addCondition}>Add</button>

      <ul>
        {conditions.map((c, i) => (
          <li key={i}>
            {c.field} {c.operator} {c.value}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ConditionEditor;
