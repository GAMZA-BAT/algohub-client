import { useEffect, useRef, useState } from "react";

export const useTimer = (initialTime = 180) => {
  const [time, setTime] = useState(initialTime);
  const intervalRef = useRef<NodeJS.Timeout | null>(null);
  const startTimer = () => {
    if (intervalRef.current) {
      clearInterval(intervalRef.current);
    }

    const startTime = Date.now();
    setTime(180);

    intervalRef.current = setInterval(() => {
      const remaining = 180 - Math.floor((Date.now() - startTime) / 1000);
      setTime(Math.max(0, remaining));
      if (remaining <= 0 && intervalRef.current) {
        clearInterval(intervalRef.current);
      }
    }, 250);
  };

  useEffect(() => {
    return () => {
      if (intervalRef.current) {
        clearInterval(intervalRef.current);
      }
    };
  }, []);

  return { time, startTimer };
};
