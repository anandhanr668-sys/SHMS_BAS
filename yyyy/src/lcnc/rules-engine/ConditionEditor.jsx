import React from "react";

const ConditionEditor = ({ condition, onChange }) => {
  return (
    <div style={styles.section}>
      <h4>IF</h4>

      <input
        placeholder="Field"
        value={condition.field}
        onChange={(e) =>
          onChange({ ...condition, field: e.target.value })
        }
      />

      <select
        value={condition.operator}
        onChange={(e) =>
          onChange({ ...condition, operator: e.target.value })
        }
      >
        <option value=">">{">"}</option>
        <option value="<">{"<"}</option>
        <option value="==">{"=="}</option>
      </select>

      <input
        placeholder="Value"
        value={condition.value}
        onChange={(e) =>
          onChange({ ...condition, value: e.target.value })
        }
      />
    </div>
  );
};

const styles = {
  section: {
    display: "flex",
    gap: 10,
    marginBottom: 16,
  },
};

export default ConditionEditor;

