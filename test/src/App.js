import { useState } from "react";

function App() {
  const [inputValue, setInputValue] = useState("");
  const [inputDisplayed, setInputDisplayed] = useState("Text");

  const handleInput = (event) => {
    event.preventDefault();
    setInputDisplayed(inputValue);
    document.getElementById("buttonId")?.click();
  };

  return (
    <>
      <h1>DevALMO YouTube</h1>

      <button id="buttonId" onClick={(e) => alert("clicked")}>
        Click
      </button>

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
