import { useEffect, useRef, useState } from "react";

export const useTimer = (initialTime = 180) => {
  const [time, setTime] = useState(initialTime);
  const intervalRef = useRef<NodeJS.Timeout | null>(null);
  const pausedTimeRef = useRef<number | null>(null);
  const startTimeRef = useRef<number | null>(null);

  const startTimer = () => {
    if (intervalRef.current) {
      clearInterval(intervalRef.current);
    }

    startTimeRef.current = Date.now();
    setTime(initialTime);

    intervalRef.current = setInterval(() => {
      const remaining =
        initialTime -
        Math.floor((Date.now() - (startTimeRef.current || 0)) / 1000);
      setTime(Math.max(0, remaining));
      if (remaining <= 0 && intervalRef.current) {
        stopTimer();
      }
    }, 250);
  };

  const stopTimer = () => {
    if (intervalRef.current) {
      clearInterval(intervalRef.current);
      intervalRef.current = null;
    }
    pausedTimeRef.current = null;
    startTimeRef.current = null;
    setTime(0);
  };

  const resumeTimer = () => {
    if (pausedTimeRef.current !== null && !intervalRef.current) {
      const newStartTime =
        Date.now() - (initialTime - pausedTimeRef.current) * 1000;
      startTimeRef.current = newStartTime;

      intervalRef.current = setInterval(() => {
        const remaining =
          initialTime -
          Math.floor((Date.now() - (startTimeRef.current || 0)) / 1000);
        setTime(Math.max(0, remaining));
        if (remaining <= 0 && intervalRef.current) {
          stopTimer();
        }
      }, 250);
    }
  };

  const pauseTimer = () => {
    if (intervalRef.current) {
      clearInterval(intervalRef.current);
      intervalRef.current = null;
      pausedTimeRef.current = time;
    }
  };

  useEffect(() => {
    return () => {
      if (intervalRef.current) {
        clearInterval(intervalRef.current);
      }
    };
  }, []);

  return {
    time,
    startTimer,
    stopTimer,
    resumeTimer,
    pauseTimer,
  };
};
