// src/lcnc/workflow-engine/workflow.model.js

class Workflow {
  constructor({
    id,
    tenantId,
    name,
    entity,                 // visit | billing | insurance | custom
    states = [],             // workflow states
    transitions = [],        // state transitions
    startState,
    isActive = true,
    createdAt = new Date(),
  }) {
    this.id = id;
    this.tenantId = tenantId;
    this.name = name;
    this.entity = entity;
    this.states = states;
    this.transitions = transitions;
    this.startState = startState;
    this.isActive = isActive;
    this.createdAt = createdAt;
  }
}

module.exports = Workflow;
