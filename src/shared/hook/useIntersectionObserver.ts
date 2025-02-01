import { useEffect, useRef } from "react";

export const useIntersectionObserver = <T extends HTMLElement>(
  callback: IntersectionObserverCallback,
) => {
  const elemntRef = useRef<T>(null);

  useEffect(() => {
    if (!elemntRef.current) return;
    const observer = new IntersectionObserver(callback, { threshold: 0.1 });

    observer.observe(elemntRef.current);

    return () => {
      if (elemntRef.current) {
        observer.unobserve(elemntRef.current);
      }
    };
  }, []);

  return elemntRef;
};
