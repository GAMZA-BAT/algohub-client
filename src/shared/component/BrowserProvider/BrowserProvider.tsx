"use client";

import UnSupportedBrowser from "@/view/unsupported-browser";
import { type ReactNode, useLayoutEffect, useState } from "react";

type BrowserProviderProps = { children: ReactNode };

const BrowserProvider = ({ children }: BrowserProviderProps) => {
  const [isSupported, setIsSupported] = useState(true);

  useLayoutEffect(() => {
    if (typeof window !== "undefined") {
      const testElement = document.createElement("div");

      testElement.style.containerType = "inline-size";

      document.body.appendChild(testElement);

      const isSupported =
        window.getComputedStyle(testElement).containerType === "inline-size";

      document.body.removeChild(testElement);

      if (!isSupported) setIsSupported(false);
    }
  }, []);

  return <>{isSupported ? children : <UnSupportedBrowser />}</>;
};

export default BrowserProvider;
