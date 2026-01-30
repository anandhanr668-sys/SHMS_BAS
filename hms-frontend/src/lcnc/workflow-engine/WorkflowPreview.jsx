import React, { useState } from "react";
import { getNextState } from "./StateMachine";

const WorkflowPreview = ({ workflow }) => {
  const [currentState, setCurrentState] = useState(
    workflow.states[0]
  );

  const moveNext = () => {
    const next = getNextState(workflow, currentState);
    setCurrentState(next);
  };

  return (
    <div className="workflow-preview">
      <h4>Workflow Preview</h4>

      <p>
        <strong>Current State:</strong> {currentState}
      </p>

      <button onClick={moveNext}>Move to Next State</button>

      <h5>Flow</h5>
      <ul>
        {workflow.transitions.map((t, i) => (
          <li key={i}>
            {t.from} ➜ {t.to}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default WorkflowPreview;
