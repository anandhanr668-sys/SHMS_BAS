import React, { useEffect } from "react";
import FormBuilder from "../../lcnc/form-engine/builder/FormBuilder";

const FormBuilderPage = () => {
  // #region agent log
  useEffect(() => {
    fetch('http://127.0.0.1:7242/ingest/1abce27b-561a-487e-ae38-0ae97682f617',{method:'POST',headers:{'Content-Type':'application/json'},body:JSON.stringify({location:'FormBuilderPage.jsx:6',message:'FormBuilderPage rendering',data:{},timestamp:Date.now(),sessionId:'debug-session',runId:'run1',hypothesisId:'C'})}).catch(()=>{});
  }, []);
  // #endregion
  
  return <FormBuilder />;
};

export default FormBuilderPage;

