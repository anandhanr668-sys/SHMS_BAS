import React from "react";
import { NavLink, useLocation } from "react-router-dom";
import { LayoutDashboard, FileText, Brain, BarChart3, ShieldCheck, LogOut } from "lucide-react";
import { motion } from "framer-motion";

const Sidebar = () => {
  const location = useLocation();

  const menuItems = [
    { icon: LayoutDashboard, label: "Dashboard", path: "/admin" },
    { icon: FileText, label: "Form Builder", path: "/admin/forms" },
    { icon: Brain, label: "Rules Engine", path: "/admin/rules" },
    { icon: BarChart3, label: "Reports", path: "/admin/reports" },
  ];

  return (
    <motion.aside
      initial={{ x: -20, opacity: 0 }}
      animate={{ x: 0, opacity: 1 }}
      className="w-64 bg-slate-900 text-white flex flex-col h-screen fixed left-0 top-0 border-r border-slate-800 shadow-2xl z-50"
    >
      <div className="p-8 border-b border-slate-800 flex items-center gap-4">
        <div className="w-12 h-12 bg-blue-600 rounded-2xl flex items-center justify-center shadow-lg shadow-blue-500/20">
          <ShieldCheck className="text-white" size={24} />
        </div>
        <div>
          <h1 className="font-black text-xl leading-tight tracking-tighter italic">Smart HMS</h1>
          <p className="text-[9px] font-bold text-slate-400 uppercase tracking-widest">Admin Portal</p>
        </div>
      </div>

      <nav className="flex-1 p-6 space-y-2 overflow-y-auto">
        {menuItems.map((item, index) => {
          const Icon = item.icon;
          const isActive = location.pathname === item.path;
          
          return (
            <motion.div
              key={item.path}
              initial={{ x: -10, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ delay: index * 0.1 }}
            >
              <NavLink
                to={item.path}
                className={`flex items-center gap-4 p-4 rounded-xl transition-all ${
                  isActive
                    ? "bg-blue-600 text-white shadow-lg shadow-blue-500/20"
                    : "text-slate-400 hover:bg-slate-800 hover:text-white"
                }`}
              >
                <Icon size={20} />
                <span className="font-bold text-sm">{item.label}</span>
              </NavLink>
            </motion.div>
          );
        })}
      </nav>

      <div className="p-6 border-t border-slate-800">
        <button className="flex items-center gap-4 p-4 text-red-400 hover:text-red-300 w-full font-bold text-sm transition-colors">
          <LogOut size={20} />
          <span>Logout</span>
        </button>
      </div>
    </motion.aside>
  );
};

export default Sidebar;

