import React, { useState } from "react";

const ActionEditor = ({ actions, setActions }) => {
  const [action, setAction] = useState("");

  const addAction = () => {
    setActions([...actions, action]);
    setAction("");
  };

  return (
    <div className="action-editor">
      <h4>Actions (THEN)</h4>

      <input
        placeholder="Action (e.g Show Alert)"
        value={action}
        onChange={(e) => setAction(e.target.value)}
      />

      <button onClick={addAction}>Add</button>

      <ul>
        {actions.map((a, i) => (
          <li key={i}>{a}</li>
        ))}
      </ul>
    </div>
  );
};

export default ActionEditor;
