import * as React from 'react';
import { HashRouter, Routes, Route, Link, useLocation, Navigate, useNavigate } from 'react-router-dom';
import { 
  Users, LayoutDashboard, Settings, FileText, Baby, LogOut, 
  Search, Activity, Bed as BedIcon, UserCog, ShieldCheck, Stethoscope
} from 'lucide-react';

import { INITIAL_SCHEMAS } from './constants.tsx';
import { FormType, FormSchema, PatientRecord, UserRole, Ward, Bed, Staff } from './types.ts';

// Pages
import Dashboard from './pages/Dashboard.tsx';
import PatientList from './pages/PatientList.tsx';
import PatientProfile from './pages/PatientProfile.tsx';
import AdminPanel from './pages/AdminPanel.tsx';
import ClinicalForm from './pages/ClinicalForm.tsx';
import Login from './pages/Login.tsx';

const Sidebar = ({ role, onLogout }: { role: UserRole, onLogout: () => void }) => {
  const location = useLocation();
  
  const getMenuItems = () => {
    const common = [{ icon: <LayoutDashboard size={20} />, label: 'Dashboard', path: '/' }];
    
    switch (role) {
      case UserRole.ADMIN:
        return [
          ...common,
          { icon: <UserCog size={20} />, label: 'LCNC Admin', path: '/admin' },
          { icon: <Users size={20} />, label: 'Staff Management', path: '/admin/staff' },
          { icon: <BedIcon size={20} />, label: 'Ward/Bed Config', path: '/admin/beds' },
        ];
      case UserRole.DOCTOR:
        return [
          ...common,
          { icon: <Users size={20} />, label: 'My Patients', path: '/patients' },
        ];
      case UserRole.NURSE:
        return [
          ...common,
          { icon: <Activity size={20} />, label: 'Vitals & Triage', path: '/patients' },
          { icon: <BedIcon size={20} />, label: 'Bed Status', path: '/beds' },
        ];
      case UserRole.FRONT_DESK:
        return [
          ...common,
          { icon: <Users size={20} />, label: 'Registration', path: '/patients' },
        ];
      default:
        return common;
    }
  };

  // Fixed JSX.IntrinsicElements missing by ensuring React namespace import
  return (
    <aside className="w-64 bg-slate-900 text-white flex flex-col h-screen fixed left-0 top-0 no-print border-r border-slate-800 shadow-2xl z-50">
      <div className="p-8 border-b border-slate-800 flex items-center gap-4">
        <div className="w-12 h-12 bg-blue-600 rounded-2xl flex items-center justify-center shadow-lg shadow-blue-500/20">
          <ShieldCheck className="text-white" size={24} />
        </div>
        <div>
          <h1 className="font-black text-xl leading-tight tracking-tighter italic">ASCAS</h1>
          <p className="text-[9px] font-bold text-slate-400 uppercase tracking-widest">{role} Portal</p>
        </div>
      </div>
      
      <nav className="flex-1 p-6 space-y-2 overflow-y-auto">
        {getMenuItems().map((item: any) => (
          <Link
            key={item.path}
            to={item.path}
            className={`flex items-center gap-4 p-4 rounded-xl transition-all ${
              location.pathname === item.path 
                ? 'bg-blue-600 text-white shadow-lg shadow-blue-500/20' 
                : 'text-slate-400 hover:bg-slate-800 hover:text-white'
            }`}
          >
            {item.icon}
            <span className="font-bold text-sm">{item.label}</span>
          </Link>
        ))}
      </nav>

      <div className="p-6 border-t border-slate-800">
        <button 
          onClick={onLogout}
          className="flex items-center gap-4 p-4 text-red-400 hover:text-red-300 w-full font-bold text-sm transition-colors"
        >
          <LogOut size={20} />
          <span>Logout</span>
        </button>
      </div>
    </aside>
  );
};

export default function App() {
  const [userRole, setUserRole] = React.useState<UserRole | null>(null);
  const [schemas, setSchemas] = React.useState<Record<string, FormSchema>>(INITIAL_SCHEMAS);
  const [patients, setPatients] = React.useState<PatientRecord[]>([]); // Empty start as requested
  const [wards, setWards] = React.useState<Ward[]>([
    { id: 'w1', name: 'General Ward A', type: 'General', floor: '1st Floor' },
    { id: 'w2', name: 'Emergency Block', type: 'Emergency', floor: 'Ground' },
  ]);
  const [beds, setBeds] = React.useState<Bed[]>([
    { id: 'b1', name: 'GW-101', type: 'Regular', status: 'Available', wardId: 'w1' },
    { id: 'b2', name: 'ER-01', type: 'ICU', status: 'Available', wardId: 'w2' },
  ]);
  const [staff, setStaff] = React.useState<Staff[]>([
    { id: 's1', name: 'Dr. Aishwarya P.', role: UserRole.DOCTOR, specialization: 'MD(OG)', department: 'Fertility' }
  ]);

  const handleLogin = (role: UserRole) => {
    setUserRole(role);
    localStorage.setItem('hms_role', role);
  };

  const handleLogout = () => {
    setUserRole(null);
    localStorage.removeItem('hms_role');
  };

  const updateSchema = (type: string, newSchema: FormSchema) => {
    setSchemas(prev => ({ ...prev, [type]: newSchema }));
  };

  const addPatient = (newPatient: PatientRecord) => {
    setPatients(prev => [...prev, newPatient]);
  };

  const updatePatient = (id: string, updates: Partial<PatientRecord>) => {
    setPatients(prev => prev.map(p => p.id === id ? { ...p, ...updates } : p));
  };

  if (!userRole) {
    return <Login onLogin={handleLogin} />;
  }

  return (
    <HashRouter>
      <div className="min-h-screen bg-slate-50 flex">
        <Sidebar role={userRole} onLogout={handleLogout} />
        
        <div className="flex-1 ml-64 flex flex-col min-h-screen">
          <header className="h-20 bg-white border-b border-slate-200 flex items-center justify-between px-10 sticky top-0 z-40 no-print">
            <div className="flex items-center gap-4 bg-slate-50 px-5 py-2.5 rounded-2xl border border-slate-200 w-[400px] focus-within:border-blue-400 transition-all">
              <Search className="text-slate-400" size={18} />
              <input 
                type="text" 
                placeholder="Search patient, bed, or file..." 
                className="bg-transparent border-none outline-none text-sm w-full font-medium"
              />
            </div>
            
            <div className="flex items-center gap-6">
              <div className="text-right">
                <p className="text-sm font-black text-slate-900 uppercase italic">Logged in as {userRole}</p>
                <p className="text-[10px] font-bold text-blue-500 uppercase tracking-widest">Active Session</p>
              </div>
              <div className="w-12 h-12 bg-slate-100 rounded-2xl flex items-center justify-center border-2 border-white shadow-md">
                <Stethoscope size={24} className="text-slate-400" />
              </div>
            </div>
          </header>

          <main className="p-10 flex-1">
            <Routes>
              <Route path="/" element={<Dashboard role={userRole} patients={patients} beds={beds} />} />
              <Route path="/patients" element={<PatientList patients={patients} onAddPatient={addPatient} role={userRole} />} />
              <Route path="/patient/:id" element={<PatientProfile schemas={schemas} patients={patients} role={userRole} updatePatient={updatePatient} beds={beds} />} />
              <Route 
                path="/patient/:id/form/:type" 
                element={<ClinicalForm schemas={schemas} />} 
              />
              <Route 
                path="/admin" 
                element={userRole === UserRole.ADMIN ? <AdminPanel schemas={schemas} onUpdateSchema={updateSchema} /> : <Navigate to="/" />} 
              />
              <Route path="*" element={<Navigate to="/" />} />
            </Routes>
          </main>
        </div>
      </div>
    </HashRouter>
  );
}