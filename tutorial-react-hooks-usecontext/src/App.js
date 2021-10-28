import { Counter } from "./components/counter";
import { Mirror } from "./components/mirror";

import CountProvider from "./context/Count";

function App() {
  return (
    <>
      <CountProvider>
        <h1>YouTube DevALMO, useContext</h1>

        <Counter />

        <hr />

        <Mirror />
      </CountProvider>
    </>
  );
}

export default App;
