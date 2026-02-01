-- USERS
CREATE EXTENSION IF NOT EXISTS "pgcrypto";

CREATE TABLE users (
  id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
  name VARCHAR(100),
  email VARCHAR(100) UNIQUE NOT NULL,
  password TEXT NOT NULL,
  role VARCHAR(20),
  created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

-- PATIENTS
CREATE TABLE patients (
  id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
  name VARCHAR(100),
  gender VARCHAR(10),
  age INT,
  phone VARCHAR(20),
  address TEXT,
  blood_group VARCHAR(5),
  emergency_contact VARCHAR(20),
  created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

-- VISITS
CREATE TABLE visits (
  id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
  patient_id UUID REFERENCES patients(id),
  visit_type VARCHAR(20),
  triage_level VARCHAR(20),
  reason TEXT,
  status VARCHAR(20),
  created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

-- WARDS & BEDS
CREATE TABLE wards (
  id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
  name VARCHAR(100),
  type VARCHAR(20),
  created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

CREATE TABLE beds (
  id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
  ward_id UUID REFERENCES wards(id),
  bed_number VARCHAR(20),
  status VARCHAR(20) DEFAULT 'AVAILABLE',
  visit_id UUID
);

-- STAFF
CREATE TABLE staff (
  id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
  user_id UUID REFERENCES users(id),
  staff_type VARCHAR(20),
  department VARCHAR(100),
  specialization VARCHAR(100),
  shift VARCHAR(20),
  created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

-- LCNC
CREATE TABLE lcnc_forms (
  id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
  name VARCHAR(150),
  schema JSONB,
  created_by UUID,
  created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

CREATE TABLE lcnc_rules (
  id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
  name VARCHAR(150),
  event VARCHAR(100),
  conditions JSONB,
  actions JSONB,
  created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

-- AUDIT
CREATE TABLE audit_logs (
  id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
  user_id UUID,
  action VARCHAR(50),
  entity VARCHAR(50),
  entity_id UUID,
  old_value JSONB,
  new_value JSONB,
  created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

-- MASTER DATA
CREATE TABLE master_data (
  id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
  category VARCHAR(50),
  key VARCHAR(100),
  value VARCHAR(200),
  created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);
