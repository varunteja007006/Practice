import { MouseEventHandler, ReactNode, memo } from "react";

function CustomButton({
  children,
  className,
  type,
  handleFunction,
}: {
  children?: ReactNode;
  className?: string;
  type?: "submit" | "reset" | "button";
  handleFunction?: MouseEventHandler<HTMLButtonElement>;
}) {
  return (
    <button
      type={type ?? "button"}
      className={`btn btn-xs w-fit sm:btn-sm md:btn-md ${className ?? ""}`}
      onClick={handleFunction}
    >
      {children}
    </button>
  );
}

export default memo(CustomButton);
