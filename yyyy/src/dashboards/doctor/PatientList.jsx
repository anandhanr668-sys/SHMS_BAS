import React from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { User, Hash, ChevronRight, Activity } from "lucide-react";

const patients = [
  { id: "1", name: "Anita Sharma", age: 45, complaint: "Chest Pain", patientId: "P-001", status: "In Consultation", riskLevel: "Warning" },
  { id: "2", name: "Rohit Mehra", age: 32, complaint: "Fever", patientId: "P-002", status: "Awaiting Vitals", riskLevel: "Normal" },
  { id: "3", name: "Sunita Rao", age: 58, complaint: "Diabetes Review", patientId: "P-003", status: "In Consultation", riskLevel: "Normal" },
];

const PatientList = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      className="space-y-6"
    >
      <div className="flex justify-between items-end mb-8">
        <div>
          <h1 className="text-4xl font-black text-slate-900 tracking-tighter uppercase italic">
            Patient List
          </h1>
          <p className="text-slate-500 font-bold text-sm mt-1 uppercase tracking-widest">
            Active Patients Today
          </p>
        </div>
      </div>

      <div className="grid grid-cols-1 gap-4">
        {patients.map((patient, index) => (
          <motion.div
            key={patient.id}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.1 }}
            whileHover={{ scale: 1.01, y: -2 }}
          >
            <Link
              to={`/doctor/patient/${patient.id}`}
              className="block bg-white p-8 rounded-3xl border border-slate-200 hover:border-blue-400 hover:shadow-xl transition-all group"
            >
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-6">
                  <div className="w-20 h-20 bg-gradient-to-br from-blue-600 to-indigo-700 rounded-2xl flex items-center justify-center font-black text-3xl text-white shadow-lg group-hover:scale-110 transition-transform italic">
                    {patient.name[0]}
                  </div>
                  <div>
                    <div className="flex items-center gap-4 mb-2">
                      <h3 className="text-2xl font-black text-slate-900 tracking-tighter italic">
                        {patient.name}
                      </h3>
                      <span className={`px-3 py-1 text-[9px] font-black rounded-full border uppercase tracking-widest ${
                        patient.riskLevel === 'Warning' ? 'bg-orange-50 text-orange-600 border-orange-100' :
                        patient.riskLevel === 'Critical' ? 'bg-red-50 text-red-600 border-red-100' :
                        'bg-blue-50 text-blue-600 border-blue-100'
                      }`}>
                        {patient.riskLevel}
                      </span>
                    </div>
                    <div className="flex flex-wrap gap-x-8 gap-y-1 text-slate-500 font-bold text-xs uppercase tracking-tight">
                      <div className="flex items-center gap-2">
                        <Hash size={12} className="text-slate-300" />
                        <span className="text-slate-900">{patient.patientId}</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <User size={12} className="text-slate-300" />
                        <span className="text-slate-900">{patient.age}Y</span>
                      </div>
                      <div className="text-slate-900">{patient.complaint}</div>
                      <div className="text-blue-600 font-black italic">{patient.status}</div>
                    </div>
                  </div>
                </div>
                <ChevronRight size={24} className="text-slate-300 group-hover:text-blue-500 transition-colors" />
              </div>
            </Link>
          </motion.div>
        ))}
      </div>
    </motion.div>
  );
};

export default PatientList;

