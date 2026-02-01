import * as React from 'react';
import { UserRole } from '../types.ts';
import { ShieldCheck, Stethoscope, Activity, Users, LayoutDashboard } from 'lucide-react';

interface LoginProps {
  onLogin: (role: UserRole) => void;
}

const Login: React.FC<LoginProps> = ({ onLogin }) => {
  const roles = [
    { role: UserRole.ADMIN, label: 'Administrator', icon: <ShieldCheck />, desc: 'LCNC Config & Management', color: 'bg-indigo-600' },
    { role: UserRole.DOCTOR, label: 'Doctor', icon: <Stethoscope />, desc: 'Consultation & Prescription', color: 'bg-blue-600' },
    { role: UserRole.NURSE, label: 'Nursing Staff', icon: <Activity />, desc: 'Vitals & Bed Management', color: 'bg-emerald-600' },
    { role: UserRole.FRONT_DESK, label: 'Front Desk', icon: <Users />, desc: 'Registration & Queue', color: 'bg-orange-600' },
    { role: UserRole.PATIENT, label: 'Patient Portal', icon: <LayoutDashboard />, desc: 'View Reports & History', color: 'bg-slate-600' },
  ];

  // Ensured React namespace is in scope for all HTML tags in return
  return (
    <div className="min-h-screen bg-slate-50 flex items-center justify-center p-6 bg-[url('https://www.transparenttextures.com/patterns/asfalt-dark.png')]">
      <div className="max-w-4xl w-full bg-white rounded-[3rem] shadow-2xl overflow-hidden border border-slate-100">
        <div className="grid grid-cols-1 md:grid-cols-2">
          <div className="bg-slate-900 p-16 text-white flex flex-col justify-between">
            <div>
              <div className="w-16 h-16 bg-blue-600 rounded-2xl flex items-center justify-center mb-8 shadow-lg shadow-blue-500/20">
                <ShieldCheck size={32} />
              </div>
              <h1 className="text-5xl font-black tracking-tighter italic uppercase leading-none">ASCAS</h1>
              <p className="mt-4 text-slate-400 font-bold uppercase tracking-widest text-xs">Enterprise HMS & LCNC Platform</p>
            </div>
            <div className="mt-20">
              <p className="text-slate-300 text-sm leading-relaxed">
                Welcome to the unified hospital management system. Please select your role to proceed to your dedicated workspace.
              </p>
            </div>
          </div>
          
          <div className="p-16">
            <h2 className="text-2xl font-black text-slate-900 uppercase tracking-tighter mb-8 italic">Choose Login Role</h2>
            <div className="space-y-4">
              {roles.map((item) => (
                <button
                  key={item.role}
                  onClick={() => onLogin(item.role)}
                  className="w-full flex items-center gap-6 p-5 rounded-3xl border border-slate-100 bg-slate-50 hover:bg-white hover:border-blue-400 hover:shadow-xl hover:shadow-blue-500/5 transition-all group text-left"
                >
                  <div className={`w-14 h-14 ${item.color} text-white rounded-2xl flex items-center justify-center shadow-lg transition-transform group-hover:scale-110`}>
                    {React.cloneElement(item.icon as React.ReactElement, { size: 24 })}
                  </div>
                  <div>
                    <h3 className="font-black text-slate-900 uppercase italic text-sm">{item.label}</h3>
                    <p className="text-[10px] text-slate-400 font-bold uppercase tracking-widest mt-1">{item.desc}</p>
                  </div>
                </button>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;