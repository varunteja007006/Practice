import React, { ReactNode } from "react";
import { MdDoubleArrow } from "react-icons/md";

function CustomHeading({ children }: { children: string | ReactNode }) {
  return (
    <h3 className="py-2 text-xl">
      <span className="flex flex-row items-center">
        <MdDoubleArrow className="text-2xl me-2" />
        {children}
      </span>
    </h3>
  );
}

export default CustomHeading;
