import { useCallback, useState } from "react";
import List from "./List.js";

function App() {
  const [number, setNumber] = useState(1);
  const [dark, setDark] = useState(false);

  const getItems = useCallback(
    (element) => {
      return [number + 1, number + 2, number + element];
    },
    [number]
  );

  const theme = {
    backgroundColor: dark ? "#333" : "#fff",
    color: dark ? "#fff" : "#333",
  };

  return (
    <>
      <div style={theme}>
        <h1>DevALMO, useCallback tutorial</h1>
        <input
          type="number"
          value={number}
          onChange={(e) => setNumber(parseInt(e.target.value))}
        />
        <button onClick={() => setDark((prevDark) => !prevDark)}>
          Change Theme
        </button>
        <List getItems={getItems} />
      </div>
    </>
  );
}

export default App;
