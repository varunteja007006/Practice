import React, { ReactNode } from "react";

function CustomPageHeader({
  children,
  pageHeading,
}: {
  children: ReactNode;
  pageHeading: string;
}) {
  return (
    <div className="p-2 md:px-4 md:py-0">
      <h1 className="mb-2 text-2xl">{pageHeading}</h1>
      <div className="w-full">{children}</div>
    </div>
  );
}

export default CustomPageHeader;
