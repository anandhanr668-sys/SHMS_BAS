import React, { useState } from "react";

const AppointmentScheduling = () => {
  const [appointment, setAppointment] = useState({
    patientName: "",
    doctor: "",
    date: ""
  });

  const handleChange = (e) => {
    setAppointment({
      ...appointment,
      [e.target.name]: e.target.value
    });
  };

  const bookAppointment = () => {
    console.log("Appointment Booked:", appointment);
    alert("Appointment scheduled successfully");
  };

  return (
    <div>
      <h2>Appointment Scheduling</h2>

      <label>Patient Name</label>
      <input
        name="patientName"
        value={appointment.patientName}
        onChange={handleChange}
      />

      <label>Doctor</label>
      <input
        name="doctor"
        value={appointment.doctor}
        onChange={handleChange}
      />

      <label>Date</label>
      <input
        type="date"
        name="date"
        value={appointment.date}
        onChange={handleChange}
      />

      <br />
      <button onClick={bookAppointment}>Book Appointment</button>
    </div>
  );
};

export default AppointmentScheduling;
