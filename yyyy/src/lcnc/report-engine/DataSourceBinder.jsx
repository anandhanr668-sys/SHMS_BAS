import React from "react";

const DataSourceBinder = ({ sources, selected, onChange }) => {
  return (
    <div>
      <label>📊 Data Source</label>
      <select
        value={selected}
        onChange={(e) => onChange(e.target.value)}
      >
        {sources.map((s) => (
          <option key={s}>{s}</option>
        ))}
      </select>
    </div>
  );
};

export default DataSourceBinder;

