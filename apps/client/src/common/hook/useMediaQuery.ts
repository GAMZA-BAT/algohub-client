import { type DependencyList, useEffect, useState } from "react";

type CallbackByDevice = {
  mobile?: () => void;
  tablet?: () => void;
  desktop?: () => void;
};

const DEVICE_QUERY = {
  mobile: "(max-width: 640px)",
  tablet: "(min-width: 640px) and (max-width: 1024px)",
  desktop: "(min-width: 1024px)",
};

export const useMediaQuery = (
  { mobile, tablet, desktop }: CallbackByDevice,
  dependencies?: DependencyList,
) => {
  const [matches, setMatches] = useState({
    mobile: false,
    tablet: false,
    desktop: false,
  });

  const handleMatch = () => {
    const isMobile = window.matchMedia(DEVICE_QUERY.mobile);
    const isTablet = window.matchMedia(DEVICE_QUERY.tablet);
    const isDesktop = window.matchMedia(DEVICE_QUERY.desktop);

    setMatches({
      mobile: isMobile.matches,
      tablet: isTablet.matches,
      desktop: isDesktop.matches,
    });

    /** 각 Device 일치 여부에 따른 Callback 실행 */
    isMobile.matches && mobile?.();
    isTablet.matches && tablet?.();
    isDesktop.matches && desktop?.();
  };

  useEffect(() => {
    window.addEventListener("resize", handleMatch);

    return () => {
      window.removeEventListener("resize", handleMatch);
    };
  }, dependencies);

  /** 각 Device 일치 여부 반환하여 사용처에서 조건부 렌더링 등에 활용 */
  return {
    isMobile: matches.mobile,
    isTablet: matches.tablet,
    isDesktop: matches.desktop,
  };
};
