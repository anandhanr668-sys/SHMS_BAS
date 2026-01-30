import React, { useEffect } from "react";

/**
 * TenantResolver
 * Resolves active hospital (tenant)
 * Example: multi-hospital SaaS
 */

const TenantResolver = ({ setTenant, children }) => {
  useEffect(() => {
    const tenantId =
      localStorage.getItem("tenantId") || "default-hospital";

    setTenant(tenantId);
  }, [setTenant]);

  return children;
};

export default TenantResolver;
