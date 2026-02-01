import React from "react";
import { motion } from "framer-motion";

const Footer = () => {
  return (
    <motion.footer
      initial={{ y: 20, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      className="p-4 text-center bg-slate-50 border-t border-slate-200 text-sm text-slate-600"
    >
      © {new Date().getFullYear()} Smart HMS Platform - Enterprise Hospital Management System
    </motion.footer>
  );
};

export default Footer;

