import React, { useState } from "react";

const Consultation = () => {
  const [notes, setNotes] = useState("");

  const saveNotes = () => {
    alert("📝 Consultation notes saved");
    console.log(notes);
  };

  return (
    <div style={styles.card}>
      <h2>Consultation</h2>

      <textarea
        rows={8}
        placeholder="Enter consultation notes..."
        value={notes}
        onChange={(e) => setNotes(e.target.value)}
        style={styles.textarea}
      />

      <button onClick={saveNotes} style={styles.button}>
        Save Notes
      </button>
    </div>
  );
};

const styles = {
  card: {
    maxWidth: 600,
    background: "white",
    padding: 24,
    borderRadius: 16,
    boxShadow: "0 20px 40px rgba(0,0,0,0.1)",
  },
  textarea: {
    width: "100%",
    padding: 14,
    borderRadius: 10,
    border: "1px solid #cbd5f5",
    marginBottom: 16,
    fontFamily: "inherit",
  },
  button: {
    padding: "10px 18px",
    background: "#2563eb",
    color: "white",
    border: "none",
    borderRadius: 8,
    fontWeight: 600,
    cursor: "pointer",
  },
};

export default Consultation;

