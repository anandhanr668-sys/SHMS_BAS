import React from "react";

const FileUpload = ({ label, required, onChange, error }) => (
  <div className="field">
    <label>
      {label} {required && "*"}
    </label>
    <input
      type="file"
      onChange={(e) => onChange(e.target.files[0])}
    />
    {error && <span className="error">{error}</span>}
  </div>
);

export default FileUpload;
