import React from "react";
import { Search, Stethoscope } from "lucide-react";
import { motion } from "framer-motion";
import NotificationCenter from "./NotificationCenter";

const Header = () => {
  return (
    <motion.header
      initial={{ y: -20, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      className="h-20 bg-white border-b border-slate-200 flex items-center justify-between px-10 sticky top-0 z-40 shadow-sm"
    >
      <div className="flex items-center gap-4 bg-slate-50 px-5 py-2.5 rounded-2xl border border-slate-200 w-[400px] focus-within:border-blue-400 transition-all">
        <Search className="text-slate-400" size={18} />
        <input
          type="text"
          placeholder="Search patient, bed, or file..."
          className="bg-transparent border-none outline-none text-sm w-full font-medium"
        />
      </div>

      <div className="flex items-center gap-6">
        <NotificationCenter />
        <div className="text-right">
          <p className="text-sm font-black text-slate-900 uppercase italic">Logged in as Admin</p>
          <p className="text-[10px] font-bold text-blue-500 uppercase tracking-widest">Active Session</p>
        </div>
        <div className="w-12 h-12 bg-slate-100 rounded-2xl flex items-center justify-center border-2 border-white shadow-md">
          <Stethoscope size={24} className="text-slate-400" />
        </div>
      </div>
    </motion.header>
  );
};

export default Header;

