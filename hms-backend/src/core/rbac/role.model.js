// src/core/rbac/role.model.js

class Role {
  constructor({ id, name, permissions = [], isSystem = false }) {
    this.id = id;
    this.name = name;
    this.permissions = permissions; // array of permission keys
    this.isSystem = isSystem;       // system roles cannot be deleted
  }
}

module.exports = Role;
