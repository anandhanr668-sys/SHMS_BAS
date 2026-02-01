import React, { useState } from "react";
import WorkflowPreview from "./WorkflowPreview";
import { createStateMachine } from "./StateMachine";

const WorkflowDesigner = () => {
  const [states, setStates] = useState(["Registered", "Admitted", "Discharged"]);
  const [transitions, setTransitions] = useState([
    { from: "Registered", to: "Admitted" },
    { from: "Admitted", to: "Discharged" },
  ]);

  const machine = createStateMachine(states, transitions);

  return (
    <div style={styles.wrapper}>
      <div style={styles.panel}>
        <h3>🧩 Workflow Designer</h3>

        <p><strong>States</strong></p>
        {states.map((s) => (
          <div key={s}>• {s}</div>
        ))}

        <p style={{ marginTop: 10 }}><strong>Transitions</strong></p>
        {transitions.map((t, i) => (
          <div key={i}>
            {t.from} → {t.to}
          </div>
        ))}
      </div>

      <WorkflowPreview machine={machine} />
    </div>
  );
};

const styles = {
  wrapper: {
    display: "grid",
    gridTemplateColumns: "1fr 1fr",
    gap: 24,
    padding: 24,
  },
  panel: {
    background: "white",
    padding: 20,
    borderRadius: 12,
    boxShadow: "0 10px 30px rgba(0,0,0,0.1)",
  },
};

export default WorkflowDesigner;

