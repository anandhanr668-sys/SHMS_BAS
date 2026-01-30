import React from "react";
import FormRenderer from "../../lcnc/form-engine/runtime/FormRenderer";

const patientFormSchema = [
  {
    id: 1,
    name: "patientName",
    label: "Patient Name",
    type: "Text",
    required: true
  },
  {
    id: 2,
    name: "age",
    label: "Age",
    type: "Number",
    required: true
  },
  {
    id: 3,
    name: "gender",
    label: "Gender",
    type: "Dropdown",
    options: ["Male", "Female", "Other"]
  }
];

const PatientRegistration = () => {
  const handleSubmit = (data) => {
    console.log("Registered Patient:", data);
    alert("Patient registered successfully");
  };

  return (
    <div>
      <h2>Patient Registration</h2>
      <FormRenderer schema={patientFormSchema} onSubmit={handleSubmit} />
    </div>
  );
};

export default PatientRegistration;
