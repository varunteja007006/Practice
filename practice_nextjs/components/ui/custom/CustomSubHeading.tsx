import React, { ReactNode } from "react";

function CustomSubHeading({ children }: { children: string | ReactNode }) {
  return (
    <>
      <h3 className="text-md py-2 mb-5 border-b-[1px]">{children}</h3>
    </>
  );
}

export default CustomSubHeading;
