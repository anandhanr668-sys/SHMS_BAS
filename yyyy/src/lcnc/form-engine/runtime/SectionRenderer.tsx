import React from "react";
import { FormSchema, Section } from "../../../types/forms";
import DynamicField from "./DynamicField";

interface SectionRendererProps {
  schema: FormSchema;
  formData: Record<string, any>;
  errors: Record<string, string>;
  onChange: (name: string, value: any) => void;
}

const SectionRenderer: React.FC<SectionRendererProps> = ({
  schema,
  formData,
  errors,
  onChange,
}) => {
  if (!schema.sections || schema.sections.length === 0) {
    return null;
  }

  return (
    <div className="space-y-8">
      {schema.sections.map((section: Section) => {
        if (!section.enabled) return null;

        return (
          <div
            key={section.id}
            className="bg-white p-8 rounded-3xl border border-slate-200 shadow-sm"
          >
            <h3 className="text-xl font-black text-slate-900 uppercase tracking-tighter mb-6 italic">
              {section.title}
            </h3>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {section.fields
                .filter((field) => field.enabled)
                .map((field) => (
                  <DynamicField
                    key={field.id}
                    field={field}
                    value={formData[field.name || field.id] || ""}
                    error={errors[field.name || field.id]}
                    onChange={onChange}
                  />
                ))}
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default SectionRenderer;
