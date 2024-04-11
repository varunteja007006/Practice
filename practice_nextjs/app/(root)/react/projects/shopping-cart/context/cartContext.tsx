import {
  createContext,
  Dispatch,
  ReactNode,
  SetStateAction,
  useEffect,
  useState,
} from "react";
import { TShoppingDataStruct } from "../hooks/useGetShoppingData";

export type TCartContext = {
  state: null | TShoppingDataStruct[];
  setState: Dispatch<SetStateAction<null | TShoppingDataStruct[]>>;
};

export const cartContext = createContext<TCartContext | null>(null);

export const CartContextProvider = ({ children }: { children: ReactNode }) => {
  const [state, setState] = useState<null | TShoppingDataStruct[]>(null);
  useEffect(() => {
    console.log(state);
  }, [state]);
  return (
    <cartContext.Provider value={{ state, setState }}>
      {children}
    </cartContext.Provider>
  );
};
