import { useState } from "react";
import { ExampleUseEffect } from "./component/exampleUseEffect";

function App() {
  const [visible, setVisible] = useState(true);

  setTimeout(() => setVisible(false), 5000);

  return (
    <>
      <h1>useEffect Guide</h1>

      {visible && <ExampleUseEffect />}
    </>
  );
}

export default App;
