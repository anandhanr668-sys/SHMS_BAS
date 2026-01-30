import React from "react";
import FormRenderer from "../../lcnc/form-engine/runtime/FormRenderer";

const vitalsFormSchema = [
  {
    id: 1,
    name: "temperature",
    label: "Temperature (°C)",
    type: "Number",
    required: true
  },
  {
    id: 2,
    name: "pulse",
    label: "Pulse Rate",
    type: "Number",
    required: true
  },
  {
    id: 3,
    name: "bp",
    label: "Blood Pressure",
    type: "Text"
  }
];

const VitalsCapture = () => {
  const submitVitals = (data) => {
    console.log("Vitals Captured:", data);
    alert("Vitals saved successfully");
  };

  return (
    <div>
      <h2>Vitals Capture</h2>
      <FormRenderer schema={vitalsFormSchema} onSubmit={submitVitals} />
    </div>
  );
};

export default VitalsCapture;
