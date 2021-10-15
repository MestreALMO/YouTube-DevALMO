import { useState, useEffect } from "react";

export const ExampleUseEffect = () => {
  const [counter, setCounter] = useState(0);

  useEffect(() => {
    document.title = counter;

    return () => (document.title = "useEffect Guide");
  }, [counter]);

  return (
    <>
      <h2>{counter}</h2>
      <button onClick={() => setCounter(counter + 1)}>+ 1</button>
    </>
  );
};
