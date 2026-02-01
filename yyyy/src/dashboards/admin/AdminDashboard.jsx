import React, { useEffect } from "react";
import { motion } from "framer-motion";
import { Users, Bed, UserCog, ClipboardList, Activity, TrendingUp } from "lucide-react";
import StatCard from "../../components/charts/StatCard";
import LineChart from "../../components/charts/LineChart";
import BedStatusChart from "../../components/charts/BedStatusChart";

const AdminDashboard = () => {
  // #region agent log
  useEffect(() => {
    fetch('http://127.0.0.1:7242/ingest/1abce27b-561a-487e-ae38-0ae97682f617',{method:'POST',headers:{'Content-Type':'application/json'},body:JSON.stringify({location:'AdminDashboard.jsx:9',message:'AdminDashboard rendering',data:{},timestamp:Date.now(),sessionId:'debug-session',runId:'run1',hypothesisId:'C'})}).catch(()=>{});
  }, []);
  // #endregion

  const chartData = [
    { name: "Mon", value: 45 },
    { name: "Tue", value: 52 },
    { name: "Wed", value: 48 },
    { name: "Thu", value: 61 },
    { name: "Fri", value: 55 },
    { name: "Sat", value: 38 },
    { name: "Sun", value: 42 },
  ];

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      className="space-y-10"
    >
      <div className="flex justify-between items-end">
        <div>
          <h1 className="text-4xl font-black text-slate-900 tracking-tighter uppercase italic">
            Hospital Operations
          </h1>
          <p className="text-slate-500 font-bold text-sm mt-1 uppercase tracking-widest">
            Real-time Overview Dashboard
          </p>
        </div>
        <div className="bg-white px-6 py-3 rounded-2xl border border-slate-200 shadow-sm text-[10px] font-black uppercase tracking-widest text-slate-400">
          Last Synced: <span className="text-blue-600">JUST NOW</span>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
        <StatCard
          title="Active Wards"
          value="12"
          icon={<Users size={24} />}
          trend="+2 New"
          color="bg-blue-600"
          delay={0.1}
        />
        <StatCard
          title="Beds Occupied"
          value="182 / 240"
          icon={<Bed size={24} />}
          trend="76% Full"
          color="bg-orange-600"
          delay={0.2}
        />
        <StatCard
          title="Staff On Duty"
          value="96"
          icon={<UserCog size={24} />}
          trend="+5%"
          color="bg-emerald-600"
          delay={0.3}
        />
        <StatCard
          title="Pending Audits"
          value="3"
          icon={<ClipboardList size={24} />}
          trend="Action Needed"
          color="bg-indigo-600"
          delay={0.4}
        />
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-10">
        <div className="lg:col-span-2">
          <LineChart
            data={chartData}
            title="Patient Admissions (Last 7 Days)"
            color="#2563eb"
          />
        </div>
        <BedStatusChart available={58} occupied={182} maintenance={0} />
      </div>
    </motion.div>
  );
};

export default AdminDashboard;

