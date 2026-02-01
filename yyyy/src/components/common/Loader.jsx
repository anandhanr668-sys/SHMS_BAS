import React from "react";

const Loader = () => {
  return (
    <div style={styles.wrapper}>
      <div style={styles.spinner}></div>
      <p>Loading...</p>
    </div>
  );
};

const styles = {
  wrapper: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    padding: 40,
  },
  spinner: {
    width: 40,
    height: 40,
    border: "4px solid #cbd5f5",
    borderTopColor: "#2563eb",
    borderRadius: "50%",
    animation: "spin 1s linear infinite",
  },
};

export default Loader;

