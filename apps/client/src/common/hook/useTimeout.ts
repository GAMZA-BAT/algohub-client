import type { Timeout } from "@/shared/type";
import { type DependencyList, useEffect, useRef } from "react";

export const useTimeout = (
  callback: () => void,
  delay?: number,
  dependencies?: DependencyList,
) => {
  const timeoutRef = useRef<Timeout>();

  useEffect(() => {
    timeoutRef.current = setTimeout(callback, delay);

    return () => clearTimeout(timeoutRef.current);
  }, dependencies);
};
