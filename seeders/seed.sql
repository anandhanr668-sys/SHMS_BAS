INSERT INTO users (name, email, password, role)
VALUES ('Admin', 'admin@hms.com', '$2a$10$dummyhash', 'ADMIN');

INSERT INTO wards (name, type)
VALUES
  ('ICU Ward', 'ICU'),
  ('General Ward', 'GENERAL');

INSERT INTO beds (ward_id, bed_number)
SELECT id, 'B-1' FROM wards;
