import { checkRefsContains } from "@/common/util/dom";
import { useCallback, useEffect, useRef } from "react";

/**
 * @param callback toggle 관리용 setState 핸들러
 * @param mouseEvent mousedown(매우 빠름), click 이벤트 중 선택 (기본값: click)
 * @example
 *  const callback = () => setShowMenu(false);
    const ref = useOutsideClick(callback);
 */
export const useOutsideClick = <T extends HTMLElement = HTMLDivElement>(
  callback: () => void,
  mouseEvent: "click" | "mousedown" = "click",
) => {
  const ref = useRef<T | null>(null);
  const handleOutsideClick = useCallback(
    ({ target }: MouseEvent) => {
      const [check] = checkRefsContains(target!, ref);
      if (!check) callback();
    },
    [callback],
  );
  const handleESCKeyDown = useCallback(
    (event: KeyboardEvent) => {
      if (event.key === "Escape") callback();
    },
    [callback],
  );

  useEffect(() => {
    document.addEventListener(mouseEvent, handleOutsideClick);
    document.addEventListener("keydown", handleESCKeyDown);
    return () => {
      document.removeEventListener(mouseEvent, handleOutsideClick);
      document.removeEventListener("keydown", handleESCKeyDown);
    };
  }, [handleOutsideClick]);

  return ref;
};
