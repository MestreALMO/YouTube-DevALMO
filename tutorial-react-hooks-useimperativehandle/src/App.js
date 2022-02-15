import { useRef } from "react";
import { Counter } from "./component/counter";

function App() {
  const ref = useRef();

  return (
    <>
      <h1>DevALMO, YouTube Channel</h1>
      <Counter ref={ref} />
      <button onClick={() => ref.current.increment()}>Out Button</button>
    </>
  );
}

export default App;
