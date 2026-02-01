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

