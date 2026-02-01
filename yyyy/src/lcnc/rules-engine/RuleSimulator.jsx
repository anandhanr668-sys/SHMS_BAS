import React, { useState } from "react";
import { executeRule } from "./RuleExecutor";

const RuleSimulator = ({ rule }) => {
  const [input, setInput] = useState({ age: 65 });
  const [result, setResult] = useState(null);

  const simulate = () => {
    const res = executeRule(rule, input);
    setResult(res);
  };

  return (
    <div style={styles.sim}>
      <h3>🧪 Rule Simulator</h3>

      <input
        type="number"
        value={input.age}
        onChange={(e) =>
          setInput({ age: Number(e.target.value) })
        }
      />

      <button onClick={simulate}>Run Rule</button>

      {result && <p>Result: {result}</p>}
    </div>
  );
};

const styles = {
  sim: {
    padding: 20,
    background: "white",
    borderRadius: 12,
    marginTop: 20,
  },
};

export default RuleSimulator;

