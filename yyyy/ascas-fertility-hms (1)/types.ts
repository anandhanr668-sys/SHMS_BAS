
export enum FormType {
  ANTENATAL = 'ANTENATAL',
  IUI_PLAN = 'IUI_PLAN',
  FERTILITY_HISTORY = 'FERTILITY_HISTORY',
  ART_SUMMARY = 'ART_SUMMARY',
  SEMEN_ANALYSIS = 'SEMEN_ANALYSIS',
  GENERAL_CONSULTATION = 'GENERAL_CONSULTATION'
}

export enum UserRole {
  ADMIN = 'ADMIN',
  DOCTOR = 'DOCTOR',
  NURSE = 'NURSE',
  FRONT_DESK = 'FRONT_DESK',
  PATIENT = 'PATIENT'
}

export interface FormField {
  id: string;
  label: string;
  type: 'text' | 'number' | 'select' | 'textarea' | 'checkbox' | 'date';
  options?: string[];
  section: string;
  enabled: boolean;
  required?: boolean;
  placeholder?: string;
}

export interface Section {
  id: string;
  title: string;
  fields: FormField[];
  enabled: boolean;
}

export interface FormSchema {
  type: string;
  title: string;
  sections: Section[];
  isSystem?: boolean;
}

export interface Medication {
  brandName: string;
  genericName: string;
  dose: string;
  frequency: string;
  timing: string;
  duration: string;
}

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
}

export interface Bed {
  id: string;
  name: string;
  type: 'Regular' | 'ICU' | 'Ventilator';
  status: 'Available' | 'Occupied' | 'Maintenance';
  wardId: string;
}

export interface Ward {
  id: string;
  name: string;
  type: 'Emergency' | 'General' | 'ICU' | 'Private';
  floor: string;
}

export interface Staff {
  id: string;
  name: string;
  role: UserRole;
  specialization?: string;
  department: string;
}
