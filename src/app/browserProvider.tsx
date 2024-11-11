"use client";

import UnSupportedBrowser from "@/view/unsupported-browser";
import { type ReactNode, useLayoutEffect, useState } from "react";

type BrowserProviderProps = { children: ReactNode };

const BrowserProvider = ({ children }: BrowserProviderProps) => {
  const [isSupported, setIsSupported] = useState(true);

  useLayoutEffect(() => {
    if (typeof window !== "undefined") {
      const testElement = document.createElement("div");

      /** container query 설정 */
      testElement.style.containerType = "inline-size";

      document.body.appendChild(testElement);

      /** 실제 적용 결과에서 container query 지원 여부 결정 */
      const isSupported =
        window.getComputedStyle(testElement).containerType === "inline-size";

      document.body.removeChild(testElement);

      /**
       * 지원 브라우저
       * 크롬 >= 105 | 사파리 >= 16.0 | Edge >= 105 | Firefox >= 110
       */
      if (!isSupported) setIsSupported(false);
    }
  }, []);

  return <>{isSupported ? children : <UnSupportedBrowser />}</>;
};

export default BrowserProvider;
