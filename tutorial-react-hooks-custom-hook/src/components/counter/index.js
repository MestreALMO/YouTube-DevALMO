import { useState } from "react";

export const Counter = () => {
  const [counter, setCounter] = useState(0);

  return (
    <>
      <h2>Counter: {counter}</h2>
      <button
        onClick={() => {
          setCounter(counter + 1);
        }}
      >
        Counter + 1
      </button>
    </>
  );
};
