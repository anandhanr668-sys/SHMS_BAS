// src/modules/wards-beds/ward.model.js

class Bed {
  constructor({ bedId, bedNumber, status = 'AVAILABLE', patientId = null }) {
    this.bedId = bedId;
    this.bedNumber = bedNumber;
    this.status = status; // AVAILABLE | OCCUPIED | MAINTENANCE
    this.patientId = patientId;
  }
}

class Ward {
  constructor({
    id,
    tenantId,
    name,
    type,               // GENERAL | ICU | PRIVATE
    beds = [],
    isActive = true,
    createdAt = new Date(),
  }) {
    this.id = id;
    this.tenantId = tenantId;
    this.name = name;
    this.type = type;
    this.beds = beds;
    this.isActive = isActive;
    this.createdAt = createdAt;
  }
}

module.exports = Ward;
