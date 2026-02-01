export const createStateMachine = (states, transitions) => {
  let currentState = states[0];

  const canTransition = (to) =>
    transitions.some(
      (t) => t.from === currentState && t.to === to
    );

  const transition = (to) => {
    if (canTransition(to)) {
      currentState = to;
      return currentState;
    }
    throw new Error("Invalid transition");
  };

  const getState = () => currentState;

  return {
    getState,
    transition,
  };
};

