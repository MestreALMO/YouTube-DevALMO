import PerguntasRepostasProvider from "./context/count";
import { Test } from "./component/test";

function App() {
  return (
    <>
      <PerguntasRepostasProvider>
        <Test />
      </PerguntasRepostasProvider>
    </>
  );
}

export default App;
