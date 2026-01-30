import React from "react";

const FieldPreview = ({ fields }) => {
  return (
    <div className="preview">
      <h4>Live Preview</h4>

      {fields.map(field => (
        <div key={field.id}>
          <label>
            {field.label} {field.required && "*"}
          </label>

          {field.type === "Text" && <input />}
          {field.type === "Number" && <input type="number" />}
          {field.type === "Date" && <input type="date" />}
          {field.type === "Dropdown" && (
            <select>
              <option>Option 1</option>
            </select>
          )}
        </div>
      ))}
    </div>
  );
};

export default FieldPreview;
