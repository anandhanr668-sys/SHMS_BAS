import React from "react";

const WardBedManagement = () => {
  return (
    <div>
      <h2>Ward & Bed Management</h2>

      <table border="1" cellPadding="6">
        <thead>
          <tr>
            <th>Ward</th>
            <th>Total Beds</th>
            <th>Occupied</th>
            <th>Available</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>General</td>
            <td>50</td>
            <td>30</td>
            <td>20</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default WardBedManagement;
