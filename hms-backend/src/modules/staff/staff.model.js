// src/modules/staff/staff.model.js

class Staff {
  constructor({
    id,
    tenantId,
    name,
    role,               // DOCTOR | NURSE | TECHNICIAN | ADMIN
    department,
    specialization,
    phone,
    email,
    onDuty = true,
    isActive = true,
    createdAt = new Date(),
  }) {
    this.id = id;
    this.tenantId = tenantId;
    this.name = name;
    this.role = role;
    this.department = department;
    this.specialization = specialization;
    this.phone = phone;
    this.email = email;
    this.onDuty = onDuty;
    this.isActive = isActive;
    this.createdAt = createdAt;
  }
}

module.exports = Staff;
