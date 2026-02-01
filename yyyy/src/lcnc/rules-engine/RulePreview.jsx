import React from "react";

const RulePreview = ({ rule }) => {
  return (
    <div style={styles.preview}>
      <h3>👁 Rule Preview</h3>
      <p>
        IF <strong>{rule.condition.field}</strong>{" "}
        {rule.condition.operator}{" "}
        <strong>{rule.condition.value}</strong>
      </p>
      <p>
        THEN <strong>{rule.action.type}</strong> →{" "}
        <em>{rule.action.message}</em>
      </p>
    </div>
  );
};

const styles = {
  preview: {
    padding: 20,
    background: "#f8fafc",
    borderRadius: 12,
  },
};

export default RulePreview;

