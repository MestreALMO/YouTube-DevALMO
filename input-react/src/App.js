import { useState } from "react";

function App() {
  const [inputValue, setInputValue] = useState("");
  const [inputDisplayed, setInputDisplayed] = useState("Text default");

  const handleInput = (event) => {
    event.preventDefault();
    setInputDisplayed(inputValue);
  };

  return (
    <>
      <h1>DevALMO YouTube</h1>

      <h2>{inputDisplayed}</h2>

      <form onSubmit={handleInput}>
        <input
          type="text"
          value={inputValue}
          onChange={(e) => {
            setInputValue(e.target.value);
          }}
        />
      </form>
    </>
  );
}

export default App;
