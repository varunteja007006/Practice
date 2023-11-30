import { useEffect } from "react";

import { toast } from "react-toastify";
function WelcomeToast() {
  useEffect(() => {
    toast("Welcome comrade");
  }, []);
  return <div></div>;
}

export default WelcomeToast;
