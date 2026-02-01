import React, { useState } from "react";
import DynamicField from "./DynamicField";
import SectionRenderer from "./SectionRenderer";
import { runValidation } from "./ValidationRunner";
import { FormSchema } from "../../../types/forms";
import { motion } from "framer-motion";

const FormRenderer = ({ schema }) => {
  const [formData, setFormData] = useState({});
  const [errors, setErrors] = useState({});

  const handleChange = (name, value) => {
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const validationErrors = runValidation(schema, formData);
    setErrors(validationErrors);

    if (Object.keys(validationErrors).length === 0) {
      alert("✅ Form submitted successfully!");
      console.log("Form Data:", formData);
    }
  };

  const hasSections = schema.sections && schema.sections.length > 0;

  return (
    <motion.form
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      onSubmit={handleSubmit}
      className="max-w-5xl mx-auto pb-20"
    >
      <div className="mb-8">
        <h2 className="text-4xl font-black text-slate-900 tracking-tighter uppercase italic mb-2">
          {schema.title}
        </h2>
      </div>

      {hasSections ? (
        <SectionRenderer
          schema={schema}
          formData={formData}
          errors={errors}
          onChange={handleChange}
        />
      ) : (
        <div className="space-y-6">
          {schema.fields?.map((field) => (
            <DynamicField
              key={field.name}
              field={field}
              value={formData[field.name] || ""}
              error={errors[field.name]}
              onChange={handleChange}
            />
          ))}
        </div>
      )}

      <div className="mt-10 flex gap-4">
        <motion.button
          whileHover={{ scale: 1.02 }}
          whileTap={{ scale: 0.98 }}
          type="submit"
          className="px-10 py-4 bg-blue-600 text-white rounded-2xl font-black text-xs uppercase tracking-widest hover:bg-blue-700 transition-all shadow-xl shadow-blue-500/20"
        >
          Save Form
        </motion.button>
        <motion.button
          whileHover={{ scale: 1.02 }}
          whileTap={{ scale: 0.98 }}
          type="button"
          onClick={() => window.print()}
          className="px-10 py-4 bg-white border border-slate-200 rounded-2xl font-black text-xs uppercase tracking-widest hover:bg-slate-50 transition-all"
        >
          Print
        </motion.button>
      </div>
    </motion.form>
  );
};

const styles = {
  form: {
    maxWidth: 500,
    margin: "40px auto",
    padding: 24,
    background: "white",
    borderRadius: 12,
    boxShadow: "0 20px 40px rgba(0,0,0,0.1)",
  },
  button: {
    marginTop: 20,
    width: "100%",
    padding: 12,
    background: "#2563eb",
    color: "white",
    border: "none",
    borderRadius: 8,
    fontWeight: 600,
    cursor: "pointer",
  },
};

export default FormRenderer;

