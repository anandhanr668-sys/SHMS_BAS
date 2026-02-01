import React from "react";

const FileUpload = ({ label, onChange }) => {
  return (
    <div style={{ marginBottom: 16 }}>
      <label>{label}</label>
      <input
        type="file"
        onChange={(e) => onChange(e.target.files[0])}
      />
    </div>
  );
};

export default FileUpload;

