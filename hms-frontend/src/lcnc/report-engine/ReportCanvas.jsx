import React from "react";

const ReportCanvas = ({ layout, dataSource }) => {
  return (
    <div className="report-canvas">
      <h4>Report Structure</h4>

      {!dataSource && <p>Select a data source</p>}

      <ul>
        {layout.map((item, index) => (
          <li key={index}>
            {item.type} → {item.field}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ReportCanvas;
