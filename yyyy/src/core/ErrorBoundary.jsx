import React from "react";

class ErrorBoundary extends React.Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false };
  }

  static getDerivedStateFromError() {
    return { hasError: true };
  }

  componentDidCatch(error, info) {
    console.error("App Error:", error, info);
    // #region agent log
    fetch('http://127.0.0.1:7242/ingest/1abce27b-561a-487e-ae38-0ae97682f617',{method:'POST',headers:{'Content-Type':'application/json'},body:JSON.stringify({location:'ErrorBoundary.jsx:14',message:'Error caught by boundary',data:{error:error.message,stack:error.stack?.substring(0,300),componentStack:info.componentStack?.substring(0,200)},timestamp:Date.now(),sessionId:'debug-session',runId:'run1',hypothesisId:'D'})}).catch(()=>{});
    // #endregion
  }

  render() {
    if (this.state.hasError) {
      return (
        <div style={{ padding: 40 }}>
          <h2>⚠ Something went wrong</h2>
          <p>Please contact system administrator.</p>
        </div>
      );
    }

    return this.props.children;
  }
}

export default ErrorBoundary;
