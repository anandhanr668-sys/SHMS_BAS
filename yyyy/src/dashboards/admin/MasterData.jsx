import React from "react";

const masterData = ["Departments", "Wards", "Bed Types", "Diagnosis Codes"];

const MasterData = () => {
  return (
    <div>
      <h2>Master Data Management</h2>

      <ul>
        {masterData.map((item) => (
          <li key={item} style={styles.item}>
            {item}
          </li>
        ))}
      </ul>
    </div>
  );
};

const styles = {
  item: {
    padding: 12,
    background: "white",
    marginBottom: 10,
    borderRadius: 8,
  },
};

export default MasterData;

