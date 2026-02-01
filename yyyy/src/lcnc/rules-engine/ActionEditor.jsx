import React from "react";

const ActionEditor = ({ action, onChange }) => {
  return (
    <div style={styles.section}>
      <h4>THEN</h4>

      <select
        value={action.type}
        onChange={(e) =>
          onChange({ ...action, type: e.target.value })
        }
      >
        <option value="showAlert">Show Alert</option>
        <option value="flagRecord">Flag Record</option>
      </select>

      <input
        placeholder="Message"
        value={action.message}
        onChange={(e) =>
          onChange({ ...action, message: e.target.value })
        }
      />
    </div>
  );
};

const styles = {
  section: {
    display: "flex",
    gap: 10,
  },
};

export default ActionEditor;

