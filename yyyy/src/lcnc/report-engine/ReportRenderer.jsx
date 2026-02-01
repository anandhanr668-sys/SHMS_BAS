import React from "react";

const ReportRenderer = ({ layout, data }) => {
  const renderLine = (line) => {
    let output = line;
    Object.keys(data).forEach((key) => {
      output = output.replace(`{{${key}}}`, data[key]);
    });
    return output;
  };

  return (
    <div style={styles.report}>
      <h3>📄 Report Preview</h3>

      {layout.map((line, idx) => (
        <p key={idx}>{renderLine(line)}</p>
      ))}
    </div>
  );
};

const styles = {
  report: {
    background: "#f8fafc",
    padding: 24,
    borderRadius: 12,
    fontSize: 15,
    lineHeight: 1.6,
  },
};

export default ReportRenderer;

