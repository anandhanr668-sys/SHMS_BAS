// src/lcnc/report-engine/report.model.js

class Report {
  constructor({
    id,
    tenantId,
    name,
    entity,            // patient | visit | billing | pharmacy | custom
    filters = [],      // dynamic filters
    columns = [],      // fields to show
    isActive = true,
    createdAt = new Date(),
  }) {
    this.id = id;
    this.tenantId = tenantId;
    this.name = name;
    this.entity = entity;
    this.filters = filters;
    this.columns = columns;
    this.isActive = isActive;
    this.createdAt = createdAt;
  }
}

module.exports = Report;
