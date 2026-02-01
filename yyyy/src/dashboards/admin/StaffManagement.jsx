import React from "react";

const StaffManagement = () => {
  return (
    <div>
      <h2>Staff Management</h2>

      <div style={styles.card}>
        <p>Doctors: 42</p>
        <p>Nurses: 88</p>
        <p>Support Staff: 35</p>
      </div>
    </div>
  );
};

const styles = {
  card: {
    background: "white",
    padding: 20,
    borderRadius: 12,
    width: 300,
  },
};

export default StaffManagement;

