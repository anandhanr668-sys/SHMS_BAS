import React from "react";
import LayoutCanvas from "./LayoutCanvas";
import PlaceholderPicker from "./PlaceholderPicker";

const ReportCanvas = ({ layout, setLayout }) => {
  const addLine = (text) => setLayout([...layout, text]);

  return (
    <div style={styles.box}>
      <h3>📝 Report Designer</h3>

      <LayoutCanvas layout={layout} />

      <PlaceholderPicker onInsert={addLine} />
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

export default ReportCanvas;

