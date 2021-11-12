import { useReducer } from "react";

function init(initialCount) {
  return initialCount;
}

function reducer(state, action) {
  switch (action.type) {
    case "increment":
      return { count: state.count + 1 };
    case "decrement":
      return { count: state.count - 1 };
    case "reset":
      return init(action.payload);
    default:
      throw new Error();
  }
}

export const Count = () => {
  const initialCount = { count: 0 };

  const [state, dispatch] = useReducer(reducer, initialCount, init);

  return (
    <>
      <h2>Count: {state.count}</h2>

      <button onClick={() => dispatch({ type: "increment" })}>+</button>
      <button onClick={() => dispatch({ type: "decrement" })}>-</button>
      <br />
      <button
        onClick={() => dispatch({ type: "reset", payload: initialCount })}
      >
        Reset
      </button>
    </>
  );
};
