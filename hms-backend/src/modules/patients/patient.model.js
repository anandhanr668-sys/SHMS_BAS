// src/modules/patients/patient.model.js

class Patient {
  constructor({
    id,
    tenantId,
    uhid,               // Unique Hospital ID
    name,
    gender,
    dob,
    phone,
    email,
    address,
    bloodGroup,
    isActive = true,
    createdAt = new Date(),
  }) {
    this.id = id;
    this.tenantId = tenantId;
    this.uhid = uhid;
    this.name = name;
    this.gender = gender;
    this.dob = dob;
    this.phone = phone;
    this.email = email;
    this.address = address;
    this.bloodGroup = bloodGroup;
    this.isActive = isActive;
    this.createdAt = createdAt;
  }
}

module.exports = Patient;
