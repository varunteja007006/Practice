import { ReactNode, useState } from "react";

function Accordian({ children }: { children?: ReactNode }) {
  const [show, setShow] = useState<boolean>(false);

  return (
    <div className="flex flex-col flex-wrap gap-5 p-5">
      <h1>Accordian</h1>
      <button
        className="btn btn-lg w-fit"
        onClick={() => {
          setShow(!show);
        }}
      >
        Show
      </button>
      {show && <div className="p-5 font-semibold">{children}</div>}
    </div>
  );
}

export default Accordian;
