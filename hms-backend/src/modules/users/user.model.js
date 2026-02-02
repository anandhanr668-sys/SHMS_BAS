// src/modules/users/user.model.js

class User {
  constructor({
    id,
    tenantId,
    name,
    email,
    phone,
    role,
    type, // STAFF | PATIENT
    isActive = true,
    createdAt = new Date(),
  }) {
    this.id = id;
    this.tenantId = tenantId;
    this.name = name;
    this.email = email;
    this.phone = phone;
    this.role = role;
    this.type = type;
    this.isActive = isActive;
    this.createdAt = createdAt;
  }
}

module.exports = User;
