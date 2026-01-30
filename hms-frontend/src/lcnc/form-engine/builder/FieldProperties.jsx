import React from "react";

const FieldProperties = ({ field, onChange }) => {
  if (!field) return <div className="properties">Select a field</div>;

  return (
    <div className="properties">
      <h4>Properties</h4>

      <label>Label</label>
      <input
        value={field.label}
        onChange={(e) =>
          onChange({ ...field, label: e.target.value })
        }
      />

      <label>
        <input
          type="checkbox"
          checked={field.required}
          onChange={(e) =>
            onChange({ ...field, required: e.target.checked })
          }
        />
        Required
      </label>
    </div>
  );
};

export default FieldProperties;
