import * as React from 'react';
import { 
  Plus, Trash2, Edit3, Layout, ChevronRight, Settings, 
  FilePlus, ToggleRight, ToggleLeft, Save, BriefcaseMedical
} from 'lucide-react';
import { FormSchema, Section, FormField } from '../types.ts';

interface AdminPanelProps {
  schemas: Record<string, FormSchema>;
  onUpdateSchema: (type: string, schema: FormSchema) => void;
}

const AdminPanel: React.FC<AdminPanelProps> = ({ schemas, onUpdateSchema }) => {
  const [selectedType, setSelectedType] = React.useState(Object.keys(schemas)[0]);
  const currentSchema = schemas[selectedType];

  const handleAddField = (sectionId: string) => {
    const label = prompt("Enter Field Label:");
    if (!label) return;

    const newField: FormField = {
      id: `field_${Date.now()}`,
      label,
      type: 'text',
      section: sectionId,
      enabled: true
    };

    const updatedSections = currentSchema.sections.map(s => 
      s.id === sectionId ? { ...s, fields: [...s.fields, newField] } : s
    );
    onUpdateSchema(selectedType, { ...currentSchema, sections: updatedSections });
  };

  const handleToggleField = (sectionId: string, fieldId: string) => {
    const updatedSections = currentSchema.sections.map(s => {
      if (s.id === sectionId) {
        return { ...s, fields: s.fields.map(f => f.id === fieldId ? { ...f, enabled: !f.enabled } : f) };
      }
      return s;
    });
    onUpdateSchema(selectedType, { ...currentSchema, sections: updatedSections });
  };

  const createNewForm = () => {
    const title = prompt("Enter Name of New Disease/Report Type:");
    if (!title) return;
    const typeId = title.toUpperCase().replace(/\s+/g, '_');
    
    const newSchema: FormSchema = {
      type: typeId,
      title,
      sections: [{ id: 'main', title: 'Main Assessment', enabled: true, fields: [] }]
    };
    onUpdateSchema(typeId, newSchema);
    setSelectedType(typeId);
  };

  // Ensured React namespace is used for proper JSX IntrinsicElements recognition
  return (
    <div className="flex gap-8">
      {/* Sidebar: Form Types */}
      <div className="w-80 space-y-3">
        <div className="flex items-center justify-between mb-6">
          <h2 className="font-bold text-slate-900 uppercase tracking-widest text-xs">Form Library</h2>
          <button 
            onClick={createNewForm}
            className="p-1.5 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition-colors"
          >
            <FilePlus size={16} />
          </button>
        </div>
        {(Object.values(schemas) as FormSchema[]).map(schema => (
          <button
            key={schema.type}
            onClick={() => setSelectedType(schema.type)}
            className={`w-full flex items-center justify-between p-4 rounded-xl border transition-all ${
              selectedType === schema.type 
              ? 'bg-blue-600 text-white border-blue-600 shadow-lg' 
              : 'bg-white border-slate-200 text-slate-600 hover:border-blue-400'
            }`}
          >
            <div className="flex items-center gap-3">
              <BriefcaseMedical size={18} />
              <span className="font-bold text-sm truncate w-40 text-left">{schema.title}</span>
            </div>
            <ChevronRight size={16} />
          </button>
        ))}
      </div>

      {/* Editor Area */}
      <div className="flex-1 bg-white border border-slate-200 rounded-2xl shadow-sm p-8 min-h-[80vh]">
        <div className="flex justify-between items-center mb-10 pb-6 border-b border-slate-100">
          <div>
            <h1 className="text-2xl font-black text-slate-900 uppercase tracking-tighter italic">LCNC Form Builder</h1>
            <p className="text-slate-500 text-sm mt-1">Customizing: <span className="font-bold text-blue-600 uppercase">{currentSchema.title}</span></p>
          </div>
          <button className="flex items-center gap-2 bg-slate-900 text-white px-6 py-2.5 rounded-lg font-bold text-sm hover:bg-slate-800 transition-all shadow-md">
            <Save size={18} />
            Publish Updates
          </button>
        </div>

        <div className="space-y-10">
          {currentSchema.sections.map(section => (
            <div key={section.id} className="group">
              <div className="flex items-center justify-between mb-6 bg-slate-50 p-3 rounded-lg border-l-4 border-blue-600">
                <div className="flex items-center gap-4">
                  <Layout className="text-blue-600" size={18} />
                  <h3 className="font-black text-slate-800 uppercase text-xs tracking-widest">{section.title}</h3>
                </div>
                <div className="flex items-center gap-2 opacity-0 group-hover:opacity-100 transition-opacity">
                  <button className="p-1.5 text-slate-400 hover:text-slate-600"><Edit3 size={16} /></button>
                  <button className="p-1.5 text-slate-400 hover:text-red-500"><Trash2 size={16} /></button>
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {section.fields.map(field => (
                  <div 
                    key={field.id} 
                    className={`relative p-5 rounded-xl border-2 transition-all ${
                      field.enabled ? 'border-slate-100 bg-white' : 'border-slate-50 bg-slate-50 opacity-50'
                    }`}
                  >
                    <div className="flex justify-between items-start mb-2">
                      <label className="text-[10px] font-black text-slate-400 uppercase tracking-widest">{field.label}</label>
                      <button 
                        onClick={() => handleToggleField(section.id, field.id)}
                        className={field.enabled ? 'text-green-600' : 'text-slate-300'}
                      >
                        {field.enabled ? <ToggleRight size={22} /> : <ToggleLeft size={22} />}
                      </button>
                    </div>
                    <div className="h-10 w-full bg-slate-50 rounded-lg border border-slate-100 flex items-center px-3 text-slate-300 text-xs italic">
                      {field.type} field input...
                    </div>
                  </div>
                ))}
                
                <button 
                  onClick={() => handleAddField(section.id)}
                  className="border-2 border-dashed border-slate-200 rounded-xl p-5 flex flex-col items-center justify-center gap-2 text-slate-400 hover:border-blue-400 hover:text-blue-600 transition-all group"
                >
                  <div className="w-8 h-8 rounded-full bg-slate-50 flex items-center justify-center group-hover:bg-blue-50">
                    <Plus size={18} />
                  </div>
                  <span className="text-[10px] font-black uppercase tracking-widest">Add Field</span>
                </button>
              </div>
            </div>
          ))}
          
          <button className="w-full py-4 border-2 border-dashed border-blue-100 rounded-xl flex items-center justify-center gap-3 text-blue-600 font-bold hover:bg-blue-50 transition-all">
            <Plus size={20} />
            Add New Form Section
          </button>
        </div>
      </div>
    </div>
  );
};

export default AdminPanel;