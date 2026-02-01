import { UserRole } from './users';

export interface PatientRecord {
  id: string;
  name: string;
  patientId: string;
  age: number;
  gender: string;
  phone: string;
  status: 'Awaiting Vitals' | 'In Consultation' | 'Admitted' | 'Discharged';
  assignedBed?: string;
  riskLevel?: 'Normal' | 'Warning' | 'Critical';
  complaint?: string;
  diagnosis?: string;
  assignedDoctor?: string;
  assignedNurse?: string;
  admissionDate?: string;
  dischargeDate?: string;
}

export interface PatientVitals {
  patientId: string;
  temperature?: number;
  bloodPressure?: string;
  pulse?: number;
  oxygenSaturation?: number;
  weight?: number;
  height?: number;
  recordedAt: string;
  recordedBy: string;
}
