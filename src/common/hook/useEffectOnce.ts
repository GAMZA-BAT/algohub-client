"use client";

import { type DependencyList, type EffectCallback, useRef } from "react";

import { useEffect } from "react";

export const useEffectOnce = (effect: EffectCallback, deps: DependencyList) => {
  const ref = useRef(false);

  useEffect(() => {
    if (ref.current) return;
    ref.current = true;

    effect();
  }, deps);
};
