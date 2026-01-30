import React from "react";

const RulePreview = ({ rule }) => (
  <div className="rule-preview">
    <h4>Rule JSON Preview</h4>
    <pre>{JSON.stringify(rule, null, 2)}</pre>
  </div>
);

export default RulePreview;
