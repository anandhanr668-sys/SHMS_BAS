import React from "react";

const Header = () => {
  return (
    <header style={styles.header}>
      <h2>🏥 Smart HMS</h2>
      <div style={styles.user}>
        <span>Admin</span>
        <img
          src="https://i.pravatar.cc/40"
          alt="User"
          style={styles.avatar}
        />
      </div>
    </header>
  );
};

const styles = {
  header: {
    height: 60,
    background: "#0f172a",
    color: "white",
    padding: "0 20px",
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
  },
  user: {
    display: "flex",
    alignItems: "center",
    gap: 10,
  },
  avatar: {
    borderRadius: "50%",
  },
};

export default Header;

