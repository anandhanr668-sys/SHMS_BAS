import React, { useEffect } from "react";
import RulesBuilder from "../../lcnc/rules-engine/RulesBuilder";

const RulesBuilderPage = () => {
  // #region agent log
  useEffect(() => {
    fetch('http://127.0.0.1:7242/ingest/1abce27b-561a-487e-ae38-0ae97682f617',{method:'POST',headers:{'Content-Type':'application/json'},body:JSON.stringify({location:'RulesBuilderPage.jsx:6',message:'RulesBuilderPage rendering',data:{},timestamp:Date.now(),sessionId:'debug-session',runId:'run1',hypothesisId:'C'})}).catch(()=>{});
  }, []);
  // #endregion
  
  return <RulesBuilder />;
};

export default RulesBuilderPage;

