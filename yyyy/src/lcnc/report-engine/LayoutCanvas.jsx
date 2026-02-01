import React from "react";

const LayoutCanvas = ({ layout }) => {
  return (
    <div style={styles.canvas}>
      {layout.map((line, idx) => (
        <div key={idx} style={styles.line}>
          {line}
        </div>
      ))}
    </div>
  );
};

const styles = {
  canvas: {
    padding: 16,
    border: "1px dashed #cbd5f5",
    borderRadius: 8,
    marginBottom: 16,
  },
  line: {
    marginBottom: 8,
    fontFamily: "monospace",
  },
};

export default LayoutCanvas;

