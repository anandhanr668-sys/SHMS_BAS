import React from "react";

const Discharge = () => {
  const dischargePatient = () => {
    alert("Patient discharged successfully");
  };

  return (
    <div>
      <h2>Patient Discharge</h2>
      <p>Ensure consultation and prescriptions are completed.</p>

      <button onClick={dischargePatient}>
        Discharge Patient
      </button>
    </div>
  );
};

export default Discharge;
