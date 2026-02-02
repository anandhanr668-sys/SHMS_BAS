// src/core/rbac/permission.model.js

class Permission {
  constructor({ key, description }) {
    this.key = key;               // e.g. "patient.read"
    this.description = description;
  }
}

module.exports = Permission;
