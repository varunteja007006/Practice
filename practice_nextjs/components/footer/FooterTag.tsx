import React from "react";
import { FaHeart } from "react-icons/fa6";

function FooterTag() {
  return (
    <div className="my-5 flex flex-col items-center">
      <p className="flex flex-row items-center gap-2">
        -- Made with Next JS <FaHeart className="text-white" />
        --
      </p>
      <p>
        {"<"} Developer {"/>"}
      </p>
      <p className=" capitalize">-- Varun Teja K --</p>
    </div>
  );
}

export default FooterTag;
