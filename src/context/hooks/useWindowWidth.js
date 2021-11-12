import { useEffect, useState } from "react";
var debounce = require("lodash.debounce");

function useWindowWidth(delay = 700) {
  const [width, setWidth] = useState("");

  useEffect(() => {
    const handleResize = () => setWidth(window.innerWidth);
    const debouncedHandleResize = debounce(handleResize, delay);
    window.addEventListener("resize", debouncedHandleResize);
    return () => {
      window.removeEventListener("resize", debouncedHandleResize);
    };
  }, [delay]);

  return width;
}

export default useWindowWidth;
