import React from "react";
import FormRenderer from "../../lcnc/form-engine/runtime/FormRenderer";

const consultationFormSchema = [
  {
    id: 1,
    name: "complaints",
    label: "Chief Complaints",
    type: "Text",
    required: true
  },
  {
    id: 2,
    name: "diagnosis",
    label: "Diagnosis",
    type: "Text",
    required: true
  },
  {
    id: 3,
    name: "notes",
    label: "Doctor Notes",
    type: "Text"
  }
];

const Consultation = () => {
  const submitConsultation = (data) => {
    console.log("Consultation Data:", data);
    alert("Consultation saved");
  };

  return (
    <div>
      <h2>Consultation</h2>
      <FormRenderer
        schema={consultationFormSchema}
        onSubmit={submitConsultation}
      />
    </div>
  );
};

export default Consultation;
