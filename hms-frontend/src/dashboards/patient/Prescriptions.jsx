import React from "react";

const Prescriptions = () => {
  const prescriptions = [
    {
      id: 1,
      date: "2026-01-10",
      medicines: ["Paracetamol", "Cough Syrup"]
    }
  ];

  return (
    <div>
      <h2>Prescriptions</h2>

      {prescriptions.map((p) => (
        <div key={p.id}>
          <strong>{p.date}</strong>
          <ul>
            {p.medicines.map((m, i) => (
              <li key={i}>{m}</li>
            ))}
          </ul>
        </div>
      ))}
    </div>
  );
};

export default Prescriptions;
