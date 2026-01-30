import React, { useState } from "react";
import { executeRule } from "./RuleExecutor";

const RuleSimulator = ({ rule }) => {
  const [input, setInput] = useState({});
  const [result, setResult] = useState(null);

  const simulate = () => {
    const output = executeRule(rule, input);
    setResult(output);
  };

  return (
    <div className="rule-simulator">
      <h4>Rule Simulator</h4>

      <textarea
        rows="4"
        placeholder='{"age": 70}'
        onChange={(e) => setInput(JSON.parse(e.target.value))}
      />

      <button onClick={simulate}>Simulate</button>

      {result && (
        <pre>{JSON.stringify(result, null, 2)}</pre>
      )}
    </div>
  );
};

export default RuleSimulator;
