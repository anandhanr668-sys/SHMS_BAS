import React from "react";
import { motion } from "framer-motion";

const DynamicField = ({ field, value, onChange, error }) => {
  const fieldName = field.name || field.id;
  const commonProps = {
    value,
    onChange: (e) => onChange(fieldName, e.target.value),
    className: "w-full px-4 py-3 rounded-xl border border-slate-200 bg-white focus:border-blue-400 focus:ring-2 focus:ring-blue-500/20 outline-none transition-all",
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
      className="space-y-2"
    >
      <label className="block text-sm font-black text-slate-900 uppercase tracking-tight">
        {field.label}
        {field.required && <span className="text-red-500 ml-1">*</span>}
      </label>

      {field.type === "text" && <input type="text" {...commonProps} placeholder={field.placeholder} />}
      {field.type === "number" && <input type="number" {...commonProps} />}
      {field.type === "date" && <input type="date" {...commonProps} />}
      {field.type === "textarea" && (
        <textarea
          {...commonProps}
          rows={4}
          className={commonProps.className + " resize-none"}
        />
      )}

      {(field.type === "select" || field.type === "dropdown") && (
        <select {...commonProps}>
          <option value="">Select {field.label}</option>
          {field.options?.map((opt) => (
            <option key={opt} value={opt}>
              {opt}
            </option>
          ))}
        </select>
      )}

      {field.type === "checkbox" && (
        <div className="flex items-center gap-2">
          <input
            type="checkbox"
            checked={value || false}
            onChange={(e) => onChange(fieldName, e.target.checked)}
            className="w-5 h-5 rounded border-slate-300 text-blue-600 focus:ring-blue-500"
          />
          <span className="text-sm text-slate-600">{field.label}</span>
        </div>
      )}

      {error && (
        <motion.span
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          className="text-red-600 text-xs font-bold"
        >
          {error}
        </motion.span>
      )}
    </motion.div>
  );
};

const styles = {
  wrapper: {
    marginBottom: 16,
  },
  label: {
    display: "block",
    marginBottom: 6,
    fontWeight: 600,
  },
  input: {
    width: "100%",
    padding: 10,
    borderRadius: 6,
    border: "1px solid #cbd5f5",
  },
  error: {
    color: "#dc2626",
    fontSize: 13,
  },
};

export default DynamicField;

