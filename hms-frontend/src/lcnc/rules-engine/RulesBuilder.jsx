import React, { useState } from "react";
import RuleCanvas from "./RuleCanvas";
import ConditionEditor from "./ConditionEditor";
import ActionEditor from "./ActionEditor";
import RulePreview from "./RulePreview";

const RulesBuilder = () => {
  const [conditions, setConditions] = useState([]);
  const [actions, setActions] = useState([]);

  return (
    <div className="rules-builder">
      <RuleCanvas />

      <ConditionEditor
        conditions={conditions}
        setConditions={setConditions}
      />

      <ActionEditor
        actions={actions}
        setActions={setActions}
      />

      <RulePreview rule={{ conditions, actions }} />
    </div>
  );
};

export default RulesBuilder;
