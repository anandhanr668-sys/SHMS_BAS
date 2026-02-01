export enum FormType {
  ANTENATAL = 'ANTENATAL',
  IUI_PLAN = 'IUI_PLAN',
  FERTILITY_HISTORY = 'FERTILITY_HISTORY',
  ART_SUMMARY = 'ART_SUMMARY',
  SEMEN_ANALYSIS = 'SEMEN_ANALYSIS',
  GENERAL_CONSULTATION = 'GENERAL_CONSULTATION',
  // Existing HMS form types
  PATIENT_REGISTRATION = 'PATIENT_REGISTRATION',
  VITALS_CAPTURE = 'VITALS_CAPTURE',
  CONSULTATION = 'CONSULTATION',
  PRESCRIPTION = 'PRESCRIPTION',
}

export interface FormField {
  id: string;
  label: string;
  type: 'text' | 'number' | 'select' | 'textarea' | 'checkbox' | 'date' | 'dropdown';
  options?: string[];
  section: string;
  enabled: boolean;
  required?: boolean;
  placeholder?: string;
  minLength?: number;
  name?: string;
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
  sections?: Section[];
  fields?: FormField[];
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
