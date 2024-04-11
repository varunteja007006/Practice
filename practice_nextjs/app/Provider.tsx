"use client";

import React, { ReactNode } from "react";
import { CartContextProvider } from "./(root)/react/projects/shopping-cart/context/cartContext";

function Provider({ children }: { children: ReactNode }) {
  return <CartContextProvider>{children}</CartContextProvider>;
}

export default Provider;
