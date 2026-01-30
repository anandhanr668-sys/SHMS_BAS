import React from "react";

const mockData = {
  patients: { total: 120, male: 70, female: 50 },
  appointments: { today: 42 },
  beds: { occupied: 60, total: 100 }
};

const ReportRenderer = ({ layout, dataSource }) => {
  if (!dataSource) return null;

  const data = mockData[dataSource];

  return (
    <div className="report-renderer">
      <h3>Final Report</h3>

      {layout.map((item, index) => (
        <div key={index} className="report-item">
          {item.type === "Text" && <p>{item.field}</p>}

          {item.type === "Metric" && (
            <h2>{data[item.field]}</h2>
          )}

          {item.type === "Table" && (
            <pre>{JSON.stringify(data, null, 2)}</pre>
          )}
        </div>
      ))}
    </div>
  );
};

export default ReportRenderer;
