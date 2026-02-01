import { Outlet } from "react-router-dom";
import Header from "../components/common/Header";
import Sidebar from "../components/common/Sidebar";
import Footer from "../components/common/Footer";

export default function AppShell() {
  return (
    <div className="app-shell">
      <Header />

      <div className="app-body">
        <Sidebar />
        <main className="app-content">
          <Outlet /> {/* 👈 nested routes render here */}
        </main>
      </div>

      <Footer />
    </div>
  );
}
