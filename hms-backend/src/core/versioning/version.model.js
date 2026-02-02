// src/core/versioning/version.model.js

class ApiVersion {
  constructor({ version, isActive = true, deprecated = false }) {
    this.version = version;         // e.g. "v1"
    this.isActive = isActive;
    this.deprecated = deprecated;
  }
}

module.exports = ApiVersion;
