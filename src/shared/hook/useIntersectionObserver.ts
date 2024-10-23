import { useEffect, useRef } from "react";

export const useFadeIn = <T extends HTMLElement>(
  callback: IntersectionObserverCallback,
) => {
  const imageRef = useRef<T>(null);

  useEffect(() => {
    if (!imageRef.current) return;
    const observer = new IntersectionObserver(callback, { threshold: 0.1 });

    observer.observe(imageRef.current);

    return () => {
      if (imageRef.current) {
        observer.unobserve(imageRef.current);
      }
    };
  }, []);

  return imageRef;
};
