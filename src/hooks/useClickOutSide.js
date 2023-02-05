import { useEffect, useRef, useState } from "react";

export default function useClickOutSide(dom = "button") {
  const [shows, setShows] = useState(false);
  const nodeRef = useRef(null);
  useEffect(() => {
    function handleClickOutSide(e) {
      if (
        nodeRef.current &&
        !nodeRef.current.contains(e.target) &&
        !e.target.matches(dom)
      ) {
        setShows(false);
      }
    }
    document.addEventListener("click", handleClickOutSide);
    return () => {
      document.removeEventListener("click", handleClickOutSide);
    };
  }, []);
  return {
    shows,
    setShows,
    nodeRef,
  };
}
