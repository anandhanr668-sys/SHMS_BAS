import { useEffect } from "react";
import { Outlet } from "react-router-dom";

import Header from "../components/common/Header";
import Sidebar from "../components/common/Sidebar";
import Footer from "../components/common/Footer";

import useNotificationStore from "../store/notificationStore";
import useRealtimeStore from "../store/realtimeStore";
import useAuthStore from "../store/authStore";

export default function AppShell() {
  const initNotifications = useNotificationStore(
    (state) => state.initRealtime
  );

  const { connected } = useRealtimeStore();
  const { isAuthenticated } = useAuthStore();

  // 🔥 Initialize realtime listeners ONCE
  useEffect(() => {
    if (isAuthenticated) {
      initNotifications();
    }
  }, [isAuthenticated, initNotifications]);

  return (
    <div className="app-shell">
      {/* ===== HEADER ===== */}
      <Header />

      {/* ===== BODY ===== */}
      <div className="app-body">
        <Sidebar />

        <main className="app-content">
          {/* Optional realtime status (debug / UX) */}
          {!connected && (
            <div style={{ color: "orange", padding: "6px" }}>
              Reconnecting to server…
            </div>
          )}

          {/* 👇 Nested routes render here */}
          <Outlet />
        </main>
      </div>

      {/* ===== FOOTER ===== */}
      <Footer />
    </div>
  );
}
