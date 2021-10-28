import { createContext } from "react";
import { useState } from "react";
import { useContext } from "react";

const CountContext = createContext();

export default function CountProvider({ children }) {
  const [count, setCount] = useState(0);

  return (
    <CountContext.Provider value={{ count, setCount }}>
      {children}
    </CountContext.Provider>
  );
}

export const useCount = () => {
  const context = useContext(CountContext);
  const { count, setCount } = context;
  return { count, setCount };
};
