import { useState, useRef } from "react";

export default function App() {
  // const [state, setState] = useState("");
  let varLet = "";
  const ref = useRef("");

  const data = (e) => {
    // setState(e.target.value);

    varLet = e.target.value;
    console.log(varLet);

    ref.current = e.target.value;
  };

  return (
    <>
      <h1>DevALMO, YouTube</h1>
      <input type="text" onChange={(e) => data(e)} />
      {/* <p>My State is {state}</p> */}
      <p>My Let is {varLet}</p>
      <p>My Ref is {ref.current}</p>
    </>
  );
}
