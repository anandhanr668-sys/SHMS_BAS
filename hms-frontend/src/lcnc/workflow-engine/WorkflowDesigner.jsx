import React, { useState } from "react";
import WorkflowPreview from "./WorkflowPreview";

const WorkflowDesigner = () => {
  const [states, setStates] = useState(["Registered", "Admitted", "Discharged"]);
  const [transitions, setTransitions] = useState([
    { from: "Registered", to: "Admitted" },
    { from: "Admitted", to: "Discharged" }
  ]);

  const [newState, setNewState] = useState("");

  const addState = () => {
    if (newState && !states.includes(newState)) {
      setStates([...states, newState]);
      setNewState("");
    }
  };

  return (
    <div className="workflow-designer">
      <h3>Workflow Designer</h3>

      <div className="workflow-editor">
        <h4>States</h4>
        <ul>
          {states.map((s, i) => (
            <li key={i}>{s}</li>
          ))}
        </ul>

        <input
          placeholder="New State"
          value={newState}
          onChange={(e) => setNewState(e.target.value)}
        />
        <button onClick={addState}>Add State</button>
      </div>

      <WorkflowPreview
        workflow={{ states, transitions }}
      />
    </div>
  );
};

export default WorkflowDesigner;
