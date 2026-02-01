import React, { useState } from "react";

const WorkflowPreview = ({ machine }) => {
  const [state, setState] = useState(machine.getState());
  const possibleTransitions = ["Registered", "Admitted", "Discharged"];

  const moveTo = (to) => {
    try {
      const newState = machine.transition(to);
      setState(newState);
    } catch {
      alert("❌ Invalid transition");
    }
  };

  return (
    <div style={styles.preview}>
      <h3>🔄 Workflow Preview</h3>

      <p>
        Current State: <strong>{state}</strong>
      </p>

      {possibleTransitions.map((s) => (
        <button
          key={s}
          onClick={() => moveTo(s)}
          style={styles.button}
        >
          Move to {s}
        </button>
      ))}
    </div>
  );
};

const styles = {
  preview: {
    background: "#f8fafc",
    padding: 24,
    borderRadius: 12,
  },
  button: {
    marginRight: 8,
    marginBottom: 8,
    padding: "8px 12px",
    background: "#2563eb",
    color: "white",
    border: "none",
    borderRadius: 6,
    cursor: "pointer",
  },
};

export default WorkflowPreview;

