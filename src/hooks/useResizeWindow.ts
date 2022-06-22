import { useContext, useEffect } from "react";
import { ContextApp } from "stateManager/store";
import { setWindowSize } from "stateManager/actions";

export const useResizeWindow = () => {
  const { dispatch } = useContext(ContextApp);

  useEffect(() => {
    const handleSubscribe = () => {
      dispatch(setWindowSize(window.innerWidth));
    };
    window.addEventListener("resize", handleSubscribe);
    return () => window.removeEventListener("resize", handleSubscribe);
  }, [dispatch]);
};
