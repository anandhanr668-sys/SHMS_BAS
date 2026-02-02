-- seeders/001_seed_users.sql

INSERT INTO users (tenant_id, name, email, role)
VALUES
('default', 'Admin User', 'admin@hms.com', 'ADMIN'),
('default', 'Doctor One', 'doctor@hms.com', 'DOCTOR');
