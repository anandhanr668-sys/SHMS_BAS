import React from "react";
import ConditionEditor from "./ConditionEditor";
import ActionEditor from "./ActionEditor";

const RuleCanvas = ({ rule, onChange }) => {
  return (
    <div style={styles.box}>
      <h3>🧠 Rule Builder</h3>

      <ConditionEditor
        condition={rule.condition}
        onChange={(c) => onChange({ ...rule, condition: c })}
      />

      <ActionEditor
        action={rule.action}
        onChange={(a) => onChange({ ...rule, action: a })}
      />
    </div>
  );
};

const styles = {
  box: {
    background: "white",
    padding: 20,
    borderRadius: 12,
    boxShadow: "0 10px 30px rgba(0,0,0,0.1)",
  },
};

export default RuleCanvas;

