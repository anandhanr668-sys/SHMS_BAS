// src/core/versioning/version.service.js

const ApiVersion = require('./version.model');

const supportedVersions = [
  new ApiVersion({ version: 'v1', isActive: true }),
  new ApiVersion({ version: 'v2', isActive: true }),
];

const DEFAULT_VERSION = 'v1';

/**
 * Resolve API version from request
 */
const resolveVersion = (req) => {
  const requestedVersion =
    req.headers['x-api-version'] ||
    req.query.version ||
    DEFAULT_VERSION;

  const version = supportedVersions.find(
    (v) => v.version === requestedVersion
  );

  return version || supportedVersions[0];
};

module.exports = {
  resolveVersion,
  supportedVersions,
};
