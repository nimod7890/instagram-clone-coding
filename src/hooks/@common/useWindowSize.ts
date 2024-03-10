// https://9yujin.tistory.com/20
import { debounce } from "lodash";
import { useEffect, useState } from "react";

type WindowSize = {
  width: number | undefined;
  height: number | undefined;
};

export default function useWindowSize() {
  const [windowSize, setWindowSize] = useState<WindowSize>({
    width: undefined,
    height: undefined,
  });

  useEffect(() => {
    const handleResize = debounce(() => {
      if (window !== undefined) {
        const { innerWidth: width, innerHeight: height } = window;
        setWindowSize({ width, height });
      }
    }, 200);

    window.addEventListener("resize", handleResize);

    handleResize();

    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return windowSize;
}
