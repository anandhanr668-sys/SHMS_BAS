import React from "react";

const beds = [
  { id: "ICU-01", status: "Occupied" },
  { id: "ICU-02", status: "Available" },
  { id: "G-21", status: "Occupied" },
  { id: "G-22", status: "Cleaning" },
];

const BedStatus = () => {
  return (
    <div>
      <h2>Bed Status</h2>

      <div style={styles.grid}>
        {beds.map((bed) => (
          <div
            key={bed.id}
            style={{
              ...styles.bed,
              background:
                bed.status === "Available"
                  ? "#dcfce7"
                  : bed.status === "Cleaning"
                  ? "#fef9c3"
                  : "#fee2e2",
            }}
          >
            <strong>{bed.id}</strong>
            <span>{bed.status}</span>
          </div>
        ))}
      </div>
    </div>
  );
};

const styles = {
  grid: {
    display: "grid",
    gridTemplateColumns: "repeat(auto-fit, minmax(140px, 1fr))",
    gap: 16,
    marginTop: 16,
  },
  bed: {
    padding: 20,
    borderRadius: 14,
    textAlign: "center",
    fontWeight: 600,
  },
};

export default BedStatus;

