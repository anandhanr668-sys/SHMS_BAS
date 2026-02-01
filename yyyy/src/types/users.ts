export enum UserRole {
  ADMIN = 'ADMIN',
  DOCTOR = 'DOCTOR',
  NURSE = 'NURSE',
  FRONT_DESK = 'FRONT_DESK',
  PATIENT = 'PATIENT',
}

export interface Staff {
  id: string;
  name: string;
  role: UserRole;
  specialization?: string;
  department: string;
  email?: string;
  phone?: string;
}

export interface User {
  id: string;
  name: string;
  email: string;
  role: UserRole;
  avatar?: string;
}
