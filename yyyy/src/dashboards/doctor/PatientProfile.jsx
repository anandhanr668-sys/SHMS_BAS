import React, { useState } from "react";
import { useParams, Link, useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import { 
  Clipboard, Activity, History, FlaskConical, Baby, FileText, 
  Calendar, Pill, ChevronRight, User, Hash, Ruler, Weight, Bed as BedIcon, CheckCircle2, X
} from "lucide-react";
import { FERTILITY_SCHEMAS } from "../../lcnc/form-engine/schemas/fertility";

const PatientProfile = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [showBedModal, setShowBedModal] = useState(false);

  // Mock patient data
  const patient = {
    id: id || "1",
    name: "Anita Sharma",
    patientId: "P-001",
    age: 45,
    gender: "Female",
    phone: "+91 98765 43210",
    status: "Admitted",
    assignedBed: "ICU-01",
    riskLevel: "Warning",
    complaint: "Chest Pain",
    diagnosis: "Hypertension",
    assignedDoctor: "Dr. Smith",
    assignedNurse: "Nurse Johnson",
  };

  const beds = [
    { id: "1", name: "ICU-01", type: "ICU", status: "Occupied", wardId: "WARD-1" },
    { id: "2", name: "ICU-02", type: "ICU", status: "Available", wardId: "WARD-1" },
    { id: "3", name: "G-12", type: "Regular", status: "Available", wardId: "WARD-2" },
  ];

  const handleAllocateBed = (bedId) => {
    // Update patient bed allocation
    setShowBedModal(false);
  };

  const schemas = Object.values(FERTILITY_SCHEMAS);

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      className="space-y-10"
    >
      <div className="bg-white p-12 rounded-[3rem] border border-slate-200 shadow-sm flex flex-col md:flex-row justify-between items-center gap-10">
        <div className="flex items-center gap-10">
          <div className="w-28 h-28 bg-gradient-to-br from-blue-600 to-indigo-700 rounded-[2rem] flex items-center justify-center font-black text-5xl text-white shadow-2xl shadow-blue-200 italic">
            {patient.name[0]}
          </div>
          <div>
            <div className="flex items-center gap-4 mb-3">
              <h1 className="text-5xl font-black text-slate-900 tracking-tighter italic leading-none">
                {patient.name}
              </h1>
              <span className={`px-4 py-1.5 text-[9px] font-black rounded-full border uppercase tracking-widest ${
                patient.status === 'Admitted' ? 'bg-red-50 text-red-600 border-red-100' : 
                'bg-blue-50 text-blue-600 border-blue-100'
              }`}>
                {patient.status}
              </span>
            </div>
            <div className="flex flex-wrap gap-x-12 gap-y-2 text-slate-500 font-bold text-xs uppercase tracking-tight">
              <div className="flex items-center gap-2">
                <Hash size={14} className="text-slate-300" />
                ID: <span className="text-slate-900">{patient.patientId}</span>
              </div>
              <div className="flex items-center gap-2">
                <User size={14} className="text-slate-300" />
                Age: <span className="text-slate-900">{patient.age}Y</span>
              </div>
              <div className="flex items-center gap-2">
                Gender: <span className="text-slate-900">{patient.gender}</span>
              </div>
              <div className="flex items-center gap-2">
                <BedIcon size={14} className="text-slate-300" />
                Bed: <span className="text-blue-600 font-black italic">{patient.assignedBed || 'NOT ASSIGNED'}</span>
              </div>
            </div>
          </div>
        </div>
        
        <div className="flex flex-col gap-3">
          <motion.button
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            className="px-10 py-4 bg-slate-900 text-white rounded-2xl font-black text-xs uppercase tracking-widest hover:bg-slate-800 transition-all shadow-xl shadow-slate-200"
          >
            New Consultation
          </motion.button>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
        <div className="lg:col-span-2 space-y-12">
          <div className="bg-white p-12 rounded-[3rem] border border-slate-200 shadow-sm">
            <h2 className="text-2xl font-black text-slate-900 uppercase tracking-tighter mb-10 italic flex items-center gap-4">
              <FileText className="text-blue-600" size={28} />
              Clinical Modules
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              {schemas.map((schema, index) => (
                <motion.div
                  key={schema.type}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1 }}
                >
                  <Link
                    to={`/doctor/patient/${id}/form/${schema.type}`}
                    className="group p-8 rounded-[2rem] border border-slate-100 bg-slate-50 hover:bg-white hover:border-blue-400 hover:shadow-2xl hover:shadow-blue-500/10 transition-all flex items-center justify-between block"
                  >
                    <div className="flex items-center gap-6">
                      <div className="w-14 h-14 bg-white rounded-2xl flex items-center justify-center shadow-md border border-slate-100 group-hover:scale-110 transition-transform">
                        <Activity className="text-blue-500" size={24} />
                      </div>
                      <div>
                        <p className="font-black text-slate-900 leading-tight text-sm uppercase italic">
                          {schema.title}
                        </p>
                        <p className="text-[9px] font-bold text-slate-400 mt-1 tracking-widest uppercase">
                          Start Entry
                        </p>
                      </div>
                    </div>
                    <ChevronRight size={20} className="text-slate-300 group-hover:text-blue-500 transition-colors" />
                  </Link>
                </motion.div>
              ))}
            </div>
          </div>
        </div>

        <div className="space-y-12">
          <div className="bg-slate-900 p-12 rounded-[3rem] text-white shadow-2xl relative overflow-hidden">
            <Activity className="absolute -right-10 -top-10 text-white opacity-5 rotate-12" size={180} />
            <h2 className="text-2xl font-black uppercase tracking-tighter mb-10 italic">Patient Vitals</h2>
            <div className="space-y-8">
              <div className="flex items-center justify-between pb-6 border-b border-white/10">
                <div className="flex items-center gap-3 text-slate-400">
                  <Weight size={18} />
                  <span className="text-[10px] font-black uppercase tracking-widest">Weight</span>
                </div>
                <span className="font-black text-xl italic">-- kg</span>
              </div>
              <div className="flex items-center justify-between pb-6 border-b border-white/10">
                <div className="flex items-center gap-3 text-slate-400">
                  <Activity size={18} />
                  <span className="text-[10px] font-black uppercase tracking-widest">Blood Pressure</span>
                </div>
                <span className="font-black text-xl italic">--/--</span>
              </div>
              <motion.button
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="w-full mt-4 py-4 bg-blue-600 hover:bg-blue-700 rounded-2xl text-[10px] font-black uppercase tracking-widest transition-all shadow-lg shadow-blue-500/20"
              >
                Update Vitals
              </motion.button>
            </div>
          </div>
        </div>
      </div>

      {/* Bed Selection Modal */}
      {showBedModal && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 z-[100] flex items-center justify-center p-6 bg-slate-900/80 backdrop-blur-md"
          onClick={() => setShowBedModal(false)}
        >
          <motion.div
            initial={{ scale: 0.9, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0.9, opacity: 0 }}
            onClick={(e) => e.stopPropagation()}
            className="bg-white w-full max-w-3xl rounded-[3rem] shadow-2xl overflow-hidden"
          >
            <div className="p-10 border-b border-slate-100 flex items-center justify-between bg-slate-50">
              <h2 className="text-2xl font-black text-slate-900 uppercase italic">Select Available Bed</h2>
              <button
                onClick={() => setShowBedModal(false)}
                className="w-12 h-12 rounded-full bg-white flex items-center justify-center text-slate-400 hover:text-slate-600 shadow-sm"
              >
                <X size={20} />
              </button>
            </div>
            <div className="p-12 grid grid-cols-1 md:grid-cols-2 gap-6 max-h-[60vh] overflow-y-auto">
              {beds.filter(b => b.status === 'Available').map(bed => (
                <motion.button
                  key={bed.id}
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  onClick={() => handleAllocateBed(bed.name)}
                  className="flex items-center justify-between p-8 rounded-3xl border border-slate-100 bg-slate-50 hover:bg-white hover:border-blue-500 hover:shadow-2xl hover:shadow-blue-500/10 transition-all text-left group"
                >
                  <div>
                    <h3 className="font-black text-slate-900 uppercase italic text-lg">{bed.name}</h3>
                    <p className="text-[10px] text-slate-400 font-bold uppercase tracking-widest mt-1">
                      {bed.type} - Ward ID: {bed.wardId}
                    </p>
                  </div>
                  <CheckCircle2 className="text-slate-200 group-hover:text-emerald-500 transition-colors" size={32} />
                </motion.button>
              ))}
              {beds.filter(b => b.status === 'Available').length === 0 && (
                <p className="col-span-full text-center py-20 text-slate-400 font-black uppercase tracking-widest">
                  No available beds
                </p>
              )}
            </div>
          </motion.div>
        </motion.div>
      )}
    </motion.div>
  );
};

export default PatientProfile;
