import React, { useEffect } from "react";
import { Outlet, useLocation } from "react-router-dom";
import { AnimatePresence, motion } from "framer-motion";
import Sidebar from "../components/common/Sidebar";
import Header from "../components/common/Header";
import Footer from "../components/common/Footer";

const AppShell = () => {
  const location = useLocation();
  
  // #region agent log
  useEffect(() => {
    fetch('http://127.0.0.1:7242/ingest/1abce27b-561a-487e-ae38-0ae97682f617',{method:'POST',headers:{'Content-Type':'application/json'},body:JSON.stringify({location:'AppShell.jsx:10',message:'AppShell rendering',data:{currentPath:location.pathname},timestamp:Date.now(),sessionId:'debug-session',runId:'run1',hypothesisId:'A'})}).catch(()=>{});
  }, [location.pathname]);
  // #endregion

  return (
    <div className="flex min-h-screen font-sans">
      <Sidebar />

      <div className="flex-1 flex flex-col ml-64">
        <Header />
        
        <main className="flex-1 p-10 bg-slate-50">
          <AnimatePresence mode="wait">
            <motion.div
              key={location.pathname}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.3, ease: "easeInOut" }}
            >
              <Outlet />
            </motion.div>
          </AnimatePresence>
        </main>

        <Footer />
      </div>
    </div>
  );
};

const styles = {
  shell: {
    display: "flex",
    minHeight: "100vh",
    fontFamily: "Inter, sans-serif",
  },
  sidebar: {
    width: 220,
    background: "#020617",
    color: "#e5e7eb",
    padding: 20,
  },
  main: {
    flex: 1,
    display: "flex",
    flexDirection: "column",
  },
  header: {
    background: "#0f172a",
    color: "white",
    padding: 16,
    fontWeight: 600,
  },
  content: {
    flex: 1,
    padding: 24,
    background: "#f8fafc",
  },
  footer: {
    padding: 10,
    textAlign: "center",
    background: "#e5e7eb",
  },
};

export default AppShell;
