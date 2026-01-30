import React from "react";

const DataSourceBinder = ({ setDataSource }) => {
  const bindSource = (e) => {
    setDataSource(e.target.value);
  };

  return (
    <div className="data-source-binder">
      <h4>Data Source</h4>

      <select onChange={bindSource}>
        <option value="">Select</option>
        <option value="patients">Patients</option>
        <option value="appointments">Appointments</option>
        <option value="beds">Bed Occupancy</option>
      </select>
    </div>
  );
};

export default DataSourceBinder;
