import { useState } from "react";
import List from "../List.js";

export default function Test00() {
  const [number, setNumber] = useState(1);
  const [dark, setDark] = useState(false);

  const getItems = () => {
    return [number + 1, number + 2, number + 3];
  };

  const theme = {
    backgroundColor: dark ? "#333" : "#fff",
    color: dark ? "#fff" : "#333",
  };

  return (
    <>
      <div style={theme}>
        <h1>DevALMO, useCallback & useMemo tutorial</h1>
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
