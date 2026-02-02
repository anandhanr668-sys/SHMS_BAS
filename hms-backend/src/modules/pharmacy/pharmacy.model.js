// src/modules/pharmacy/pharmacy.model.js

class Medicine {
  constructor({
    id,
    tenantId,
    name,
    batchNumber,
    expiryDate,
    price,
    stockQuantity,
    createdAt = new Date(),
  }) {
    this.id = id;
    this.tenantId = tenantId;
    this.name = name;
    this.batchNumber = batchNumber;
    this.expiryDate = expiryDate;
    this.price = price;
    this.stockQuantity = stockQuantity;
    this.createdAt = createdAt;
  }
}

class Dispense {
  constructor({
    id,
    tenantId,
    patientId,
    visitId,
    medicines = [],
    totalAmount = 0,
    createdAt = new Date(),
  }) {
    this.id = id;
    this.tenantId = tenantId;
    this.patientId = patientId;
    this.visitId = visitId;
    this.medicines = medicines; // [{ medicineId, quantity, amount }]
    this.totalAmount = totalAmount;
    this.createdAt = createdAt;
  }
}

module.exports = {
  Medicine,
  Dispense,
};
