import React, { useEffect } from "react";
import ReportDesigner from "../../lcnc/report-engine/ReportDesigner";

const ReportDesignerPage = () => {
  // #region agent log
  useEffect(() => {
    fetch('http://127.0.0.1:7242/ingest/1abce27b-561a-487e-ae38-0ae97682f617',{method:'POST',headers:{'Content-Type':'application/json'},body:JSON.stringify({location:'ReportDesignerPage.jsx:6',message:'ReportDesignerPage rendering',data:{},timestamp:Date.now(),sessionId:'debug-session',runId:'run1',hypothesisId:'C'})}).catch(()=>{});
  }, []);
  // #endregion
  
  return <ReportDesigner />;
};

export default ReportDesignerPage;

