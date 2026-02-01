import React from "react";

const Footer = () => {
  return (
    <footer style={styles.footer}>
      © {new Date().getFullYear()} Smart HMS Platform
    </footer>
  );
};

const styles = {
  footer: {
    padding: 12,
    textAlign: "center",
    background: "#f1f5f9",
    fontSize: 14,
  },
};

export default Footer;

