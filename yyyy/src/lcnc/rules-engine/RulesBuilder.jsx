import React, { useState } from "react";
import RuleCanvas from "./RuleCanvas";
import RulePreview from "./RulePreview";
import RuleSimulator from "./RuleSimulator";

const RulesBuilder = () => {
  // #region agent log
  React.useEffect(() => {
    fetch('http://127.0.0.1:7242/ingest/1abce27b-561a-487e-ae38-0ae97682f617',{method:'POST',headers:{'Content-Type':'application/json'},body:JSON.stringify({location:'RulesBuilder.jsx:7',message:'RulesBuilder rendering',data:{},timestamp:Date.now(),sessionId:'debug-session',runId:'run1',hypothesisId:'C'})}).catch(()=>{});
  }, []);
  // #endregion

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

