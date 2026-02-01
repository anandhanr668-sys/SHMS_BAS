import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import App from "./App";
import ErrorBoundary from "./core/ErrorBoundary";
import "./index.css";

// #region agent log
const logDebug = (location, message, data, hypothesisId) => {
  fetch('http://127.0.0.1:7242/ingest/1abce27b-561a-487e-ae38-0ae97682f617',{
    method:'POST',
    headers:{'Content-Type':'application/json'},
    body:JSON.stringify({
      location,
      message,
      data,
      timestamp:Date.now(),
      sessionId:'debug-session',
      runId:'run1',
      hypothesisId
    })
  }).catch(()=>{});
};

logDebug('main.jsx:7', 'App mounting started', {timestamp:Date.now()}, 'B');
// #endregion

try {
  const rootElement = document.getElementById("root");
  
  // #region agent log
  logDebug('main.jsx:15', 'Root element check', {rootExists:!!rootElement,rootType:rootElement?.tagName}, 'B');
  // #endregion

  if (!rootElement) {
    throw new Error("Root element not found");
  }

  const root = ReactDOM.createRoot(rootElement);
  
  // #region agent log
  logDebug('main.jsx:23', 'Root created, rendering', {}, 'B');
  // #endregion

  root.render(
    <React.StrictMode>
      <ErrorBoundary>
        <BrowserRouter>
          <App />
        </BrowserRouter>
      </ErrorBoundary>
    </React.StrictMode>
  );

  // #region agent log
  logDebug('main.jsx:32', 'App rendered successfully', {}, 'B');
  
  // Log console errors
  window.addEventListener('error', (event) => {
    logDebug('main.jsx:error', 'Global error caught', {message:event.message,filename:event.filename,lineno:event.lineno}, 'D');
  });
  
  window.addEventListener('unhandledrejection', (event) => {
    logDebug('main.jsx:rejection', 'Unhandled promise rejection', {reason:event.reason?.toString()}, 'D');
  });
  // #endregion
} catch (error) {
  // #region agent log
  logDebug('main.jsx:35', 'Mount error', {error:error.message,stack:error.stack?.substring(0,200)}, 'B');
  // #endregion
  console.error("Failed to mount app:", error);
  throw error;
}

