import React, { useState } from "react";

const Prescriptions = () => {
  const [medicines, setMedicines] = useState([
    { name: "", dosage: "" }
  ]);

  const addMedicine = () => {
    setMedicines([...medicines, { name: "", dosage: "" }]);
  };

  const updateMedicine = (index, field, value) => {
    const updated = [...medicines];
    updated[index][field] = value;
    setMedicines(updated);
  };

  const savePrescription = () => {
    console.log("Prescription:", medicines);
    alert("Prescription saved");
  };

  return (
    <div>
      <h2>Prescriptions</h2>

      {medicines.map((m, i) => (
        <div key={i}>
          <input
            placeholder="Medicine Name"
            value={m.name}
            onChange={(e) =>
              updateMedicine(i, "name", e.target.value)
            }
          />
          <input
            placeholder="Dosage"
            value={m.dosage}
            onChange={(e) =>
              updateMedicine(i, "dosage", e.target.value)
            }
          />
        </div>
      ))}

      <button onClick={addMedicine}>Add Medicine</button>
      <br /><br />
      <button onClick={savePrescription}>Save Prescription</button>
    </div>
  );
};

export default Prescriptions;
