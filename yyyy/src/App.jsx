import React, { useEffect } from "react";
import AppRoutes from "./routes/AppRoutes";

/* Global styles */
import "./styles/global.css";
import "./styles/login.css";
import "./styles/dashboard.css";
import "./styles/formBuilder.css";
import "./styles/rulesBuilder.css";
import "./styles/reportDesigner.css";

const App = () => {
  // #region agent log
  useEffect(() => {
    fetch('http://127.0.0.1:7242/ingest/1abce27b-561a-487e-ae38-0ae97682f617',{method:'POST',headers:{'Content-Type':'application/json'},body:JSON.stringify({location:'App.jsx:13',message:'App component rendering',data:{},timestamp:Date.now(),sessionId:'debug-session',runId:'run1',hypothesisId:'B'})}).catch(()=>{});
  }, []);
  // #endregion
  
  return <AppRoutes />;
};

export default App;

