export default function DashboardCard({ title, value }) {
  return (
    <div style={styles.card}>
      <p style={styles.title}>{title}</p>
      <h2 style={styles.value}>{value}</h2>
    </div>
  );
}

const styles = {
  card: {
    background: "white",
    padding: 20,
    borderRadius: 12,
    boxShadow: "0 8px 20px rgba(0,0,0,0.08)"
  },
  title: {
    color: "#64748b",
    marginBottom: 6
  },
  value: {
    fontSize: 26
  }
};
