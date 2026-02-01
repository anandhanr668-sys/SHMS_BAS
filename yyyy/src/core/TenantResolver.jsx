import React, { useState } from "react";

const tenants = ["City Hospital", "Care Plus", "Apollo Wing"];

const TenantResolver = ({ children }) => {
  const [tenant, setTenant] = useState(tenants[0]);

  return (
    <div>
      <div style={{ padding: 10, background: "#e0f2fe" }}>
        <strong>Hospital:</strong>{" "}
        <select
          value={tenant}
          onChange={(e) => setTenant(e.target.value)}
        >
          {tenants.map((t) => (
            <option key={t}>{t}</option>
          ))}
        </select>
      </div>

      {children}
    </div>
  );
};

export default TenantResolver;

