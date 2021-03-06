import { useMemo, useEffect, useState } from "react";
import List from "./List.js";

function App() {
  const [number, setNumber] = useState(0);
  const [darkTheme, setDarkTheme] = useState(false);

  const getItems = () => {
    return [number + 1, number + 2];
  };

  const theme = useMemo(() => {
    return {
      backgroundColor: darkTheme ? "#333" : "#fff",
      color: darkTheme ? "#fff" : "#333",
    };
  }, [darkTheme]);

  useEffect(() => {
    return console.log("Theme changed");
  }, [theme]);

  return (
    <>
      <div style={theme}>
        <h1>DevALMO, useMemo tutorial</h1>
        <input
          type="number"
          value={number}
          onChange={(e) => setNumber(parseInt(e.target.value))}
        />
        <button onClick={() => setDarkTheme((dark) => !dark)}>
          Change Theme
        </button>
        <List getItems={getItems} />
      </div>
    </>
  );
}

export default App;
