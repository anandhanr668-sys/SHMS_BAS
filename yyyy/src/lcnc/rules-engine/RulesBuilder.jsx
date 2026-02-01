import React, { useState } from "react";
import RuleCanvas from "./RuleCanvas";
import RulePreview from "./RulePreview";
import RuleSimulator from "./RuleSimulator";

const RulesBuilder = () => {
  const [rule, setRule] = useState({
    condition: { field: "age", operator: ">", value: 60 },
    action: { type: "showAlert", message: "Senior patient detected" },
  });

  return (
    <div style={styles.layout}>
      <RuleCanvas rule={rule} onChange={setRule} />
      <RulePreview rule={rule} />
      <RuleSimulator rule={rule} />
    </div>
  );
};

const styles = {
  layout: {
    display: "grid",
    gridTemplateColumns: "1fr 1fr",
    gap: 20,
    padding: 24,
  },
};

export default RulesBuilder;

