import React, { useState } from "react";
import ReportCanvas from "./ReportCanvas";
import ReportRenderer from "./ReportRenderer";

const ReportDesigner = () => {
  // #region agent log
  React.useEffect(() => {
    fetch('http://127.0.0.1:7242/ingest/1abce27b-561a-487e-ae38-0ae97682f617',{method:'POST',headers:{'Content-Type':'application/json'},body:JSON.stringify({location:'ReportDesigner.jsx:6',message:'ReportDesigner rendering',data:{},timestamp:Date.now(),sessionId:'debug-session',runId:'run1',hypothesisId:'C'})}).catch(()=>{});
  }, []);
  // #endregion

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

