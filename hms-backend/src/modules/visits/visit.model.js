// src/modules/visits/visit.model.js

class Visit {
  constructor({
    id,
    tenantId,
    patientId,
    visitType,           // OPD | IPD | EMERGENCY
    doctorId,
    department,
    visitDate = new Date(),
    status = 'OPEN',     // OPEN | IN_PROGRESS | CLOSED
    complaints = '',
    diagnosis = '',
    notes = '',
    createdAt = new Date(),
  }) {
    this.id = id;
    this.tenantId = tenantId;
    this.patientId = patientId;
    this.visitType = visitType;
    this.doctorId = doctorId;
    this.department = department;
    this.visitDate = visitDate;
    this.status = status;
    this.complaints = complaints;
    this.diagnosis = diagnosis;
    this.notes = notes;
    this.createdAt = createdAt;
  }
}

module.exports = Visit;
