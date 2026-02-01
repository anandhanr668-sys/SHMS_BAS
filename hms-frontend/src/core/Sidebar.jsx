import { Link } from "react-router-dom";
import { useAuthStore } from "../store/authStore";
import { sidebarConfig } from "../config/sidebarConfig";

export default function Sidebar() {
  const user = useAuthStore(s => s.user);

  // 🔐 SAFETY: user may be null on refresh
  if (!user || !user.role) {
    return null;
  }

  const items = sidebarConfig[user.role] || [];

  return (
    <aside style={styles.sidebar}>
      {items.map(item => (
        <Link key={item.path} to={item.path} style={styles.link}>
          {item.label}
        </Link>
      ))}
    </aside>
  );
}

const styles = {
  sidebar: {
    width: 240,
    background: "#0f172a",
    color: "white",
    padding: 16
  },
  link: {
    display: "block",
    padding: "10px 12px",
    marginBottom: 8,
    borderRadius: 8,
    color: "white",
    textDecoration: "none"
  }
};
