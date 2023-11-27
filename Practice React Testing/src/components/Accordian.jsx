/* eslint-disable react/prop-types */

import { useState } from "react";

function Accordian({ name, children }) {
  const [show, setShow] = useState(false);

  return (
    <div className="accordian">
      <div className="accordian-title">
        <div>
          <h1>{name}</h1>
        </div>
        <div>
          <button className="button text-black" onClick={() => setShow(!show)}>
            Toggle
          </button>
        </div>
      </div>
      {show && <div className="accordian-body">{children}</div>}
    </div>
  );
}

export default Accordian;
