-- Seed data for HMS

-- Admin user (password: admin123)
INSERT INTO users (name, email, password, role)
VALUES ('Admin', 'admin@hms.com', '$2a$10$rOzJqJqJqJqJqJqJqJqJqOqJqJqJqJqJqJqJqJqJqJqJqJqJqJqJqJq', 'ADMIN');

-- Wards
INSERT INTO wards (name, type)
VALUES
  ('ICU Ward', 'ICU'),
  ('General Ward', 'GENERAL'),
  ('Semi-Private Ward', 'SEMI');

-- Beds
INSERT INTO beds (ward_id, bed_number)
SELECT id, 'B-' || generate_series(1, 5) FROM wards WHERE type = 'ICU';

INSERT INTO beds (ward_id, bed_number)
SELECT id, 'B-' || generate_series(1, 10) FROM wards WHERE type = 'GENERAL';

INSERT INTO beds (ward_id, bed_number)
SELECT id, 'B-' || generate_series(1, 8) FROM wards WHERE type = 'SEMI';

-- Master Data
INSERT INTO master_data (category, key, value)
VALUES
  ('TRIAGE_LEVEL', 'CRITICAL', 'Critical Patient'),
  ('TRIAGE_LEVEL', 'MODERATE', 'Moderate Patient'),
  ('TRIAGE_LEVEL', 'NORMAL', 'Normal Patient'),
  ('WARD_TYPE', 'ICU', 'Intensive Care Unit'),
  ('WARD_TYPE', 'GENERAL', 'General Ward'),
  ('WARD_TYPE', 'SEMI', 'Semi-Private Ward');
