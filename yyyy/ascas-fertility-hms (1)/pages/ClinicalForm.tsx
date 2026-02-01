import * as React from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { 
  Printer, Save, ArrowLeft, Plus, Trash2, Pill, Activity, Stethoscope
} from 'lucide-react';
import { FormType, FormSchema, Medication } from '../types.ts';

interface ClinicalFormProps {
  schemas: Record<string, FormSchema>;
}

const ClinicalForm: React.FC<ClinicalFormProps> = ({ schemas }) => {
  const { id, type } = useParams();
  const navigate = useNavigate();
  const schema = schemas[type as string];
  
  const [formData, setFormData] = React.useState<Record<string, any>>({});
  const [medications, setMedications] = React.useState<Medication[]>([
    { brandName: '', genericName: '', dose: '', frequency: '', timing: '', duration: '' }
  ]);

  const handleInputChange = (fieldId: string, value: any) => {
    setFormData((prev: Record<string, any>) => ({ ...prev, [fieldId]: value }));
  };

  const handleMedChange = (index: number, field: keyof Medication, value: string) => {
    const updated = [...medications];
    updated[index][field] = value;
    setMedications(updated);
  };

  if (!schema) return <div className="p-20 text-center text-slate-400 italic">Clinical protocol not initialized.</div>;

  // Ensured React namespace is in scope for all HTML tags in return
  return (
    <div className="max-w-5xl mx-auto pb-20">
      {/* Tools */}
      <div className="flex items-center justify-between mb-8 no-print">
        <button 
          onClick={() => navigate(`/patient/${id}`)}
          className="flex items-center gap-2 text-slate-500 hover:text-slate-900 font-bold text-sm uppercase transition-colors"
        >
          <ArrowLeft size={18} />
          Patient Profile
        </button>
        <div className="flex gap-4">
          <button 
            onClick={() => window.print()}
            className="flex items-center gap-2 bg-white border border-slate-200 px-5 py-2.5 rounded-xl font-bold text-sm hover:bg-slate-50 shadow-sm"
          >
            <Printer size={18} />
            Print Report
          </button>
          <button className="flex items-center gap-2 bg-blue-600 text-white px-8 py-2.5 rounded-xl font-bold text-sm hover:bg-blue-700 shadow-lg shadow-blue-100 transition-all">
            <Save size={18} />
            Finalize Visit
          </button>
        </div>
      </div>

      {/* Actual Report Sheet */}
      <div className="bg-white p-16 border border-slate-200 shadow-2xl rounded-none print:shadow-none print:border-none print:p-0">
        {/* Hospital Brand Header */}
        <div className="flex justify-between items-start border-b-4 border-slate-900 pb-8 mb-10">
          <div className="flex items-center gap-6">
            <div className="w-20 h-20 bg-slate-900 rounded-full flex items-center justify-center">
              <Stethoscope className="text-white" size={40} />
            </div>
            <div>
              <h1 className="text-4xl font-black text-slate-900 tracking-tighter uppercase italic">ASCAS</h1>
              <p className="text-[10px] font-black tracking-[0.2em] text-slate-500 uppercase mt-1">Sarve Bhavanthu Sukhinah</p>
            </div>
          </div>
          <div className="text-right">
            <h2 className="text-2xl font-black text-slate-900 uppercase tracking-tight">Fertility & Women's Centre</h2>
            <p className="text-slate-500 font-medium text-sm mt-1">Date: {new Date().toLocaleDateString()}</p>
          </div>
        </div>

        {/* Patient Identification Bar */}
        <div className="grid grid-cols-4 bg-slate-50 border-2 border-slate-900 p-4 mb-12 text-[10px] font-black uppercase tracking-widest divide-x-2 divide-slate-900">
          <div className="px-4">Patient: <span className="text-blue-600 ml-2">MRS. RETHIKA JR</span></div>
          <div className="px-4">ID: <span className="text-slate-900 ml-2">ASCAS26517</span></div>
          <div className="px-4">Gender: <span className="text-slate-900 ml-2">FEMALE</span></div>
          <div className="px-4 text-right">Age: <span className="text-slate-900 ml-2">19Y</span></div>
        </div>

        <div className="mb-12">
          <h3 className="text-2xl font-black text-slate-900 uppercase tracking-tighter border-b-2 border-slate-100 pb-3 mb-10 italic">
            {schema.title}
          </h3>

          {/* Dynamic LCNC Sections */}
          {schema.sections.filter(s => s.enabled).map(section => (
            <div key={section.id} className="mb-12">
              <h4 className="flex items-center gap-3 text-xs font-black text-slate-800 uppercase tracking-[0.15em] mb-6 bg-slate-50 p-3 border-l-4 border-slate-900">
                <Activity size={14} className="text-blue-600" />
                {section.title}
              </h4>
              <div className="grid grid-cols-2 lg:grid-cols-3 gap-x-12 gap-y-8 px-4">
                {section.fields.filter(f => f.enabled).map(field => (
                  <div key={field.id} className="flex flex-col gap-1.5">
                    <label className="text-[9px] font-black text-slate-400 uppercase tracking-widest">{field.label}:</label>
                    <div className="border-b-2 border-slate-100 focus-within:border-blue-600 transition-colors">
                      {field.type === 'select' ? (
                        <select className="w-full bg-transparent py-2 text-sm font-bold text-slate-900 outline-none print:appearance-none">
                          <option value="">--</option>
                          {field.options?.map(o => <option key={o} value={o}>{o}</option>)}
                        </select>
                      ) : (
                        <input 
                          type={field.type} 
                          className="w-full bg-transparent py-2 text-sm font-bold text-slate-900 outline-none"
                          placeholder="..."
                        />
                      )}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Prescription Table - Essential for HMS */}
        <div className="mb-16">
          <h4 className="flex items-center gap-3 text-xs font-black text-slate-800 uppercase tracking-[0.15em] mb-6 bg-slate-50 p-3 border-l-4 border-slate-900">
            <Pill size={14} className="text-blue-600" />
            Medications & Prescriptions
          </h4>
          <table className="w-full border-collapse">
            <thead>
              <tr className="bg-slate-900 text-white text-[9px] font-black uppercase tracking-widest">
                <th className="p-3 text-left w-12 border border-slate-900">S#</th>
                <th className="p-3 text-left border border-slate-900">Brand Name</th>
                <th className="p-3 text-left border border-slate-900">Generic</th>
                <th className="p-3 text-left border border-slate-900">Dose</th>
                <th className="p-3 text-left border border-slate-900">Relation</th>
                <th className="p-3 text-left border border-slate-900">Duration</th>
              </tr>
            </thead>
            <tbody className="text-sm font-bold text-slate-800">
              {medications.map((med, i) => (
                <tr key={i}>
                  <td className="p-3 border border-slate-100 text-center">{i + 1}</td>
                  <td className="p-3 border border-slate-100">
                    <input className="w-full outline-none" value={med.brandName} onChange={e => handleMedChange(i, 'brandName', e.target.value)} />
                  </td>
                  <td className="p-3 border border-slate-100">
                    <input className="w-full outline-none" value={med.genericName} onChange={e => handleMedChange(i, 'genericName', e.target.value)} />
                  </td>
                  <td className="p-3 border border-slate-100">
                    <input className="w-full outline-none" value={med.dose} onChange={e => handleMedChange(i, 'dose', e.target.value)} />
                  </td>
                  <td className="p-3 border border-slate-100">
                    <input className="w-full outline-none" value={med.timing} onChange={e => handleMedChange(i, 'timing', e.target.value)} />
                  </td>
                  <td className="p-3 border border-slate-100">
                    <input className="w-full outline-none" value={med.duration} onChange={e => handleMedChange(i, 'duration', e.target.value)} />
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
          <button onClick={() => setMedications([...medications, { brandName: '', genericName: '', dose: '', frequency: '', timing: '', duration: '' }])} className="mt-4 text-blue-600 font-bold text-xs uppercase flex items-center gap-2 no-print">
            <Plus size={14} /> Add Medicine
          </button>
        </div>

        {/* Footer */}
        <div className="mt-32 flex justify-between items-end border-t border-slate-100 pt-10">
          <div>
            <p className="text-[10px] font-black text-slate-400 uppercase tracking-widest mb-1">Clinic Stamp / Authorized By</p>
            <div className="w-64 h-24 border border-dashed border-slate-200 rounded-lg flex items-center justify-center text-slate-200 text-xs italic">
              Seal Area
            </div>
          </div>
          <div className="text-right">
            <div className="w-48 border-b-2 border-slate-900 mb-2"></div>
            <p className="text-sm font-black text-slate-900 uppercase tracking-tighter italic">Dr. Aishwarya P.</p>
            <p className="text-[10px] font-bold text-slate-500">MD(OG), DNB, FNB, MRCOG(UK)</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ClinicalForm;