// src/lcnc/report-engine/report.generator.js

/**
 * Apply filters on dataset
 */
const applyFilters = (data, filters) => {
  return data.filter((item) =>
    filters.every((filter) => {
      const value = item[filter.field];

      switch (filter.operator) {
        case '==': return value == filter.value;
        case '!=': return value != filter.value;
        case '>': return value > filter.value;
        case '<': return value < filter.value;
        case '>=': return value >= filter.value;
        case '<=': return value <= filter.value;
        default: return true;
      }
    })
  );
};

/**
 * Pick only required columns
 */
const pickColumns = (data, columns) => {
  return data.map((item) => {
    const row = {};
    columns.forEach((col) => {
      row[col] = item[col];
    });
    return row;
  });
};

/**
 * Generate report
 */
const generateReport = (sourceData, reportConfig) => {
  let result = sourceData;

  if (reportConfig.filters?.length) {
    result = applyFilters(result, reportConfig.filters);
  }

  if (reportConfig.columns?.length) {
    result = pickColumns(result, reportConfig.columns);
  }

  return result;
};

module.exports = {
  generateReport,
};
