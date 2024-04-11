import { createContext, ReactNode, useContext, useState } from "react";

export const cartContext = createContext("");

export const CartContextProvider = ({ children }: { children: ReactNode }) => {
  const [state, setState] = useState("Hello");
  return <cartContext.Provider value={state}>{children}</cartContext.Provider>;
};
