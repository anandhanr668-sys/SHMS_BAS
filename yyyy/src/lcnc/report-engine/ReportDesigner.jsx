import React, { useState } from "react";
import ReportCanvas from "./ReportCanvas";
import ReportRenderer from "./ReportRenderer";

const ReportDesigner = () => {
  const [layout, setLayout] = useState([
    "Patient Name: {{patientName}}",
    "Age: {{age}}",
    "Diagnosis: {{diagnosis}}",
  ]);

  const [data] = useState({
    patientName: "John Doe",
    age: 45,
    diagnosis: "Hypertension",
  });

  return (
    <div style={styles.wrapper}>
      <ReportCanvas layout={layout} setLayout={setLayout} />
      <ReportRenderer layout={layout} data={data} />
    </div>
  );
};

const styles = {
  wrapper: {
    display: "grid",
    gridTemplateColumns: "1fr 1fr",
    gap: 24,
    padding: 24,
  },
};

export default ReportDesigner;

