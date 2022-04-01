import { createContext, useContext, useState, useEffect } from "react";
import axios from "axios";

interface PerguntasRepostasContextProps {
  perguntasRepostas: any;
  setPerguntasRepostas: any;
}

const PerguntasRepostasContext = createContext(
  {} as PerguntasRepostasContextProps
);

const PerguntasRepostasProvider = ({ children }: any) => {
  const [perguntasRepostas, setPerguntasRepostas] = useState();

  const api =
    "http://core-api-cb-customersuccess-sit.ocp-eqx.dc.nova/v1/answers/categorie/2589";

  const getApiWithAxios = async () => {
    const response = await axios.get(api);
    setPerguntasRepostas(response.data);
  };
  useEffect(() => {
    getApiWithAxios();
  }, []);

  return (
    <PerguntasRepostasContext.Provider
      value={{ perguntasRepostas, setPerguntasRepostas }}
    >
      {children}
    </PerguntasRepostasContext.Provider>
  );
};
export default PerguntasRepostasProvider;

export const usePerguntasRepostas = () => {
  const context = useContext(PerguntasRepostasContext);
  const { perguntasRepostas, setPerguntasRepostas } = context;
  return { perguntasRepostas, setPerguntasRepostas };
};
