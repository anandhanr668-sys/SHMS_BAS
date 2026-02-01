import * as React from 'react';
import { Link } from 'react-router-dom';
import { MoreVertical, UserPlus, Filter, X, AlertCircle, Phone, Search } from 'lucide-react';
import { PatientRecord, UserRole } from '../types.ts';

interface PatientListProps {
  patients: PatientRecord[];
  onAddPatient: (p: PatientRecord) => void;
  role: UserRole;
}

const PatientList: React.FC<PatientListProps> = ({ patients, onAddPatient, role }) => {
  const [isModalOpen, setIsModalOpen] = React.useState(false);
  const [error, setError] = React.useState('');
  const [formData, setFormData] = React.useState({
    name: '',
    patientId: '',
    age: '',
    gender: 'Female',
    phone: ''
  });

  const validatePatientId = (id: string) => {
    const regex = /^ASCAS\d{5}$/;
    return regex.test(id);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setError('');

    if (!formData.name || !formData.patientId || !formData.age || !formData.phone) {
      setError('Please fill in all mandatory fields.');
      return;
    }

    if (!validatePatientId(formData.patientId)) {
      setError('Invalid Patient ID. Must be "ASCAS" followed by 5 digits.');
      return;
    }

    const newPatient: PatientRecord = {
      id: Date.now().toString(),
      name: formData.name,
      patientId: formData.patientId,
      age: parseInt(formData.age),
      gender: formData.gender,
      phone: formData.phone,
      status: 'Awaiting Vitals'
    };

    onAddPatient(newPatient);
    setIsModalOpen(false);
    setFormData({ name: '', patientId: '', age: '', gender: 'Female', phone: '' });
  };

  // Fixed JSX recognition by ensuring React namespace import is in scope for tags
  return (
    <div className="space-y-10">
      <div className="flex justify-between items-end">
        <div>
          <h1 className="text-4xl font-black text-slate-900 tracking-tighter uppercase italic">Patient Registry</h1>
          <p className="text-slate-500 font-bold text-sm mt-1 uppercase tracking-widest">System contains {patients.length} total records</p>
        </div>
        {role === UserRole.FRONT_DESK && (
          <button 
            onClick={() => setIsModalOpen(true)}
            className="flex items-center gap-4 bg-blue-600 text-white px-8 py-4 rounded-2xl hover:bg-blue-700 transition-all shadow-xl shadow-blue-100 font-black text-xs uppercase tracking-widest"
          >
            <UserPlus size={18} />
            Register Patient
          </button>
        )}
      </div>

      <div className="bg-white rounded-[3rem] border border-slate-200 overflow-hidden shadow-sm">
        <div className="p-10 border-b border-slate-100 flex justify-between items-center bg-slate-50/50">
          <div className="flex gap-4">
            <div className="relative">
              <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400" size={18} />
              <input 
                type="text" 
                placeholder="Find in list..." 
                className="bg-white border border-slate-200 rounded-2xl px-12 py-3 text-xs font-bold uppercase tracking-widest outline-none focus:border-blue-500 w-64"
              />
            </div>
            <button className="flex items-center gap-2 px-6 py-3 bg-white border border-slate-200 rounded-2xl text-[10px] font-black uppercase tracking-widest text-slate-500 hover:bg-slate-50 transition-colors">
              <Filter size={14} /> Filter
            </button>
          </div>
          <div className="text-[10px] font-black text-slate-400 uppercase tracking-widest">Active Records: {patients.length}</div>
        </div>
        
        <table className="w-full text-left">
          <thead>
            <tr className="bg-slate-900 text-white text-[10px] font-black uppercase tracking-widest italic">
              <th className="px-10 py-6">Patient Identifier</th>
              <th className="px-10 py-6">Hospital ID</th>
              <th className="px-10 py-6">Demographics</th>
              <th className="px-10 py-6">Current Status</th>
              <th className="px-10 py-6 text-right">Actions</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-slate-100 font-bold text-slate-700">
            {patients.length === 0 ? (
              <tr>
                <td colSpan={5} className="px-10 py-24 text-center text-slate-300 font-black uppercase tracking-widest italic text-xl">
                  Queue is empty
                </td>
              </tr>
            ) : (
              patients.map((p) => (
                <tr key={p.id} className="hover:bg-slate-50/50 transition-all group">
                  <td className="px-10 py-8">
                    <Link to={`/patient/${p.id}`} className="flex items-center gap-4">
                      <div className="w-12 h-12 bg-blue-50 rounded-xl flex items-center justify-center font-black text-blue-600 italic">
                        {p.name[0]}
                      </div>
                      <span className="font-black text-slate-900 uppercase italic group-hover:text-blue-600 transition-colors underline decoration-blue-100 underline-offset-4">{p.name}</span>
                    </Link>
                  </td>
                  <td className="px-10 py-8 font-mono text-sm tracking-tighter text-slate-500">{p.patientId}</td>
                  <td className="px-10 py-8 text-xs uppercase tracking-tight">{p.gender}, {p.age}Y • {p.phone}</td>
                  <td className="px-10 py-8">
                    <span className="px-4 py-1.5 bg-slate-100 rounded-full text-[9px] font-black uppercase tracking-widest text-slate-600">
                      {p.status}
                    </span>
                  </td>
                  <td className="px-10 py-8 text-right">
                    <button className="w-10 h-10 rounded-full hover:bg-white flex items-center justify-center text-slate-300 hover:text-slate-600 shadow-sm border border-transparent hover:border-slate-100 transition-all">
                      <MoreVertical size={18} />
                    </button>
                  </td>
                </tr>
              ))
            )}
          </tbody>
        </table>
      </div>

      {/* Registration Modal */}
      {isModalOpen && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center p-6 bg-slate-900/80 backdrop-blur-md animate-in fade-in duration-300">
          <div className="bg-white w-full max-w-xl rounded-[3rem] shadow-2xl overflow-hidden animate-in zoom-in-95 duration-300">
            <div className="p-10 border-b border-slate-100 flex items-center justify-between bg-slate-50">
              <h2 className="text-2xl font-black text-slate-900 uppercase italic tracking-tighter">Register New Patient</h2>
              <button onClick={() => setIsModalOpen(false)} className="w-12 h-12 rounded-full bg-white flex items-center justify-center text-slate-400 hover:text-slate-600 shadow-sm">
                X
              </button>
            </div>
            
            <form onSubmit={handleSubmit} className="p-12 space-y-6">
              {error && (
                <div className="p-5 bg-red-50 border border-red-100 rounded-[1.5rem] flex items-start gap-4 text-red-600 text-[10px] font-black uppercase tracking-widest">
                  <AlertCircle size={18} className="shrink-0" />
                  <span>{error}</span>
                </div>
              )}

              <div className="space-y-2">
                <label className="text-[10px] font-black text-slate-400 uppercase tracking-widest ml-1">Full Legal Name</label>
                <input 
                  type="text" 
                  className="w-full bg-slate-50 border-2 border-slate-100 rounded-[1.5rem] px-6 py-4 text-sm font-black italic uppercase focus:border-blue-500 outline-none transition-all"
                  placeholder="e.g. Mrs. Rethika JR"
                  value={formData.name}
                  onChange={e => setFormData({ ...formData, name: e.target.value })}
                />
              </div>

              <div className="grid grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label className="text-[10px] font-black text-slate-400 uppercase tracking-widest ml-1">Patient Hospital ID</label>
                  <input 
                    type="text" 
                    className="w-full bg-slate-50 border-2 border-slate-100 rounded-[1.5rem] px-6 py-4 text-sm font-mono uppercase focus:border-blue-500 outline-none transition-all"
                    placeholder="ASCAS12345"
                    value={formData.patientId}
                    onChange={e => setFormData({ ...formData, patientId: e.target.value.toUpperCase() })}
                  />
                </div>
                <div className="space-y-2">
                  <label className="text-[10px] font-black text-slate-400 uppercase tracking-widest ml-1">Mobile Number</label>
                  <div className="relative">
                    <Phone className="absolute left-5 top-1/2 -translate-y-1/2 text-slate-300" size={18} />
                    <input 
                      type="tel" 
                      className="w-full bg-slate-50 border-2 border-slate-100 rounded-[1.5rem] px-12 py-4 text-sm font-bold focus:border-blue-500 outline-none transition-all"
                      placeholder="9876543210"
                      value={formData.phone}
                      onChange={e => setFormData({ ...formData, phone: e.target.value })}
                    />
                  </div>
                </div>
              </div>

              <div className="grid grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label className="text-[10px] font-black text-slate-400 uppercase tracking-widest ml-1">Age</label>
                  <input 
                    type="number" 
                    className="w-full bg-slate-50 border-2 border-slate-100 rounded-[1.5rem] px-6 py-4 text-sm font-black italic focus:border-blue-500 outline-none transition-all"
                    placeholder="19"
                    value={formData.age}
                    onChange={e => setFormData({ ...formData, age: e.target.value })}
                  />
                </div>
                <div className="space-y-2">
                  <label className="text-[10px] font-black text-slate-400 uppercase tracking-widest ml-1">Gender</label>
                  <select 
                    className="w-full bg-slate-50 border-2 border-slate-100 rounded-[1.5rem] px-6 py-4 text-sm font-black italic uppercase focus:border-blue-500 outline-none transition-all appearance-none"
                    value={formData.gender}
                    onChange={e => setFormData({ ...formData, gender: e.target.value })}
                  >
                    <option value="Female">Female</option>
                    <option value="Male">Male</option>
                    <option value="Other">Other</option>
                  </select>
                </div>
              </div>

              <div className="pt-6 flex gap-4">
                <button 
                  type="button"
                  onClick={() => setIsModalOpen(false)}
                  className="flex-1 px-8 py-4 bg-white border-2 border-slate-100 rounded-2xl font-black text-xs uppercase tracking-widest text-slate-400 hover:bg-slate-50 transition-all"
                >
                  Cancel
                </button>
                <button 
                  type="submit"
                  className="flex-1 px-8 py-4 bg-blue-600 text-white rounded-2xl font-black text-xs uppercase tracking-widest hover:bg-blue-700 shadow-xl shadow-blue-100 transition-all"
                >
                  Complete Registration
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  );
};

export default PatientList;