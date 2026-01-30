/**
 * StateMachine
 * Handles workflow transitions safely
 */

export const getNextState = (workflow, currentState) => {
  const transition = workflow.transitions.find(
    (t) => t.from === currentState
  );

  return transition ? transition.to : currentState;
};
