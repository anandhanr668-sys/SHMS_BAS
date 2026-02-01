import React from "react";

const WardBedManagement = () => {
  return (
    <div>
      <h2>Ward & Bed Management</h2>

      <table style={styles.table}>
        <thead>
          <tr>
            <th>Ward</th>
            <th>Total Beds</th>
            <th>Available</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>ICU</td>
            <td>20</td>
            <td>4</td>
          </tr>
          <tr>
            <td>General</td>
            <td>120</td>
            <td>36</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

const styles = {
  table: {
    width: "100%",
    background: "white",
    borderRadius: 10,
    overflow: "hidden",
  },
};

export default WardBedManagement;

