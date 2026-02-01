import * as React from 'react';
import { 
  Users, 
  Calendar, 
  ClipboardList, 
  TrendingUp,
  ArrowUpRight,
  Clock,
  Bed as BedIcon,
  ShieldCheck,
  Activity
} from 'lucide-react';
import { UserRole, PatientRecord, Bed } from '../types.ts';

// StatCard component with fixed JSX recognition via React namespace import
const StatCard = ({ title, value, icon, trend, color }: any) => (
  <div className="bg-white p-8 rounded-[2rem] border border-slate-200 shadow-sm hover:shadow-xl transition-all group">
    <div className="flex justify-between items-start mb-6">
      <div className={`p-4 rounded-2xl ${color} text-white shadow-lg transition-transform group-hover:scale-110`}>
        {icon}
      </div>
      <div className="flex items-center text-green-600 text-xs font-black uppercase tracking-widest">
        {trend}
        <ArrowUpRight size={14} className="ml-1" />
      </div>
    </div>
    <h3 className="text-slate-400 text-[10px] font-black uppercase tracking-widest">{title}</h3>
    <p className="text-3xl font-black text-slate-900 mt-2 tracking-tighter italic">{value}</p>
  </div>
);

const Dashboard = ({ role, patients, beds }: { role: UserRole, patients: PatientRecord[], beds: Bed[] }) => {
  const activePatients = patients.filter(p => p.status !== 'Discharged').length;
  const availableBeds = beds.filter(b => b.status === 'Available').length;

  return (
    <div className="space-y-10">
      <div className="flex justify-between items-end">
        <div>
          <h1 className="text-4xl font-black text-slate-900 tracking-tighter uppercase italic">Clinic Overview</h1>
          <p className="text-slate-500 font-bold text-sm mt-1 uppercase tracking-widest">Session: {role} Portal</p>
        </div>
        <div className="bg-white px-6 py-3 rounded-2xl border border-slate-200 shadow-sm text-[10px] font-black uppercase tracking-widest text-slate-400">
          Last Synced: <span className="text-blue-600">JUST NOW</span>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
        <StatCard 
          title="Total Registered" 
          value={patients.length} 
          icon={<Users size={24} />}
          trend="+12%"
          color="bg-blue-600"
        />
        <StatCard 
          title="Active Cases" 
          value={activePatients} 
          icon={<Activity size={24} />}
          trend="+5%"
          color="bg-orange-600"
        />
        <StatCard 
          title="Available Beds" 
          value={availableBeds} 
          icon={<BedIcon size={24} />}
          trend="Real-time"
          color="bg-emerald-600"
        />
        <StatCard 
          title="Admin Tasks" 
          value="4" 
          icon={<ShieldCheck size={24} />}
          trend="Action Needed"
          color="bg-indigo-600"
        />
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-10">
        <div className="lg:col-span-2 bg-white rounded-[3rem] border border-slate-200 p-12 shadow-sm">
          <div className="flex justify-between items-center mb-10">
            <h2 className="text-2xl font-black text-slate-900 uppercase tracking-tighter italic">Recent Queue</h2>
            <button className="text-blue-600 font-black text-xs uppercase tracking-widest hover:underline">View All</button>
          </div>
          <div className="space-y-6">
            {patients.length === 0 ? (
              <div className="text-center py-20 bg-slate-50 rounded-[2rem] border-2 border-dashed border-slate-200">
                <Users className="mx-auto text-slate-300 mb-4" size={48} />
                <p className="text-slate-400 font-bold text-sm uppercase">No patients in system</p>
              </div>
            ) : (
              patients.slice(0, 5).map((p) => (
                <div key={p.id} className="flex items-center justify-between p-6 bg-slate-50 rounded-3xl border border-slate-100 hover:bg-white hover:border-blue-400 hover:shadow-xl hover:shadow-blue-500/5 transition-all cursor-pointer">
                  <div className="flex items-center gap-6">
                    <div className="w-14 h-14 rounded-2xl bg-blue-100 flex items-center justify-center font-black text-blue-600 italic">
                      {p.name[0]}
                    </div>
                    <div>
                      <h4 className="font-black text-slate-900 uppercase italic text-sm">{p.name}</h4>
                      <p className="text-[10px] text-slate-500 font-bold tracking-widest">ID: {p.patientId} • {p.status}</p>
                    </div>
                  </div>
                  <div className="text-right">
                    <span className={`px-4 py-1.5 rounded-full text-[9px] font-black uppercase tracking-widest ${
                      p.riskLevel === 'Critical' ? 'bg-red-100 text-red-600' : 
                      p.riskLevel === 'Warning' ? 'bg-orange-100 text-orange-600' : 'bg-green-100 text-green-600'
                    }`}>
                      {p.riskLevel || 'Triage Pending'}
                    </span>
                  </div>
                </div>
              ))
            )}
          </div>
        </div>

        <div className="bg-slate-900 rounded-[3rem] p-12 text-white shadow-2xl relative overflow-hidden">
          <BedIcon className="absolute -right-10 -bottom-10 text-white opacity-5 rotate-12" size={240} />
          <h2 className="text-2xl font-black uppercase tracking-tighter mb-10 italic relative z-10">Bed Status</h2>
          <div className="space-y-8 relative z-10">
            {beds.slice(0, 4).map(bed => (
              <div key={bed.id} className="flex items-center justify-between pb-6 border-b border-white/10 last:border-0">
                <div>
                  <p className="font-black text-sm italic">{bed.name}</p>
                  <p className="text-[9px] font-bold text-slate-500 uppercase tracking-widest mt-1">{bed.type}</p>
                </div>
                <span className={`px-4 py-1.5 rounded-full text-[9px] font-black uppercase tracking-widest ${
                  bed.status === 'Available' ? 'bg-emerald-500/20 text-emerald-400' : 'bg-red-500/20 text-red-400'
                }`}>
                  {bed.status}
                </span>
              </div>
            ))}
            <button className="w-full mt-6 py-4 bg-white/10 hover:bg-white/20 rounded-2xl text-[10px] font-black uppercase tracking-widest transition-all">
              Manage Wards
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;