import { useEffect, useRef } from "react";
/**
 * 이전 state 값을 반환하는 커스텀 훅
 * @param value - 저장할 state 값
 * @returns 이전 state 값
 */
export const usePrevious = <T>(value: T): T | undefined => {
  const ref = useRef<T>();
  useEffect(() => {
    ref.current = value;
  }, [value]);
  return ref.current;
};
