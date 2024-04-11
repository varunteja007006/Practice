import {
  createContext,
  Dispatch,
  ReactNode,
  SetStateAction,
  useState,
} from "react";

export const cartContext = createContext<{
  state: null;
  setState: Dispatch<SetStateAction<null>>;
} | null>(null);

export const CartContextProvider = ({ children }: { children: ReactNode }) => {
  const [state, setState] = useState(null);

  return (
    <cartContext.Provider value={{ state, setState }}>
      {children}
    </cartContext.Provider>
  );
};
