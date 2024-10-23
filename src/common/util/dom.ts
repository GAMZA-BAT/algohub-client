import type { MutableRefObject } from "react";

/**
 * refs.map((ref) => ref.current?.contains(target as Node))를 리턴하는 함수
 * 
 * @param target MouseEvent.target
 * @param refs
 * @returns {boolean[]} refs 순서대로 HTMLElement.contains() 결과 boolean[]
 * @example 
 * 
 * ({ target }: MouseEvent) => {
    const [notiBtn, noti, profileBtn, profile] = checkContains(
      target!,
      notificationBtnRef,
      notificationRef,
      profileBtnRef,
      profileMenuRef,
    );
 */
export const checkRefsContains = (
  target: EventTarget,
  ...refs: MutableRefObject<HTMLElement | null>[]
) => {
  return refs.map((ref) => ref.current?.contains(target as Node));
};

/**
 * button 외의 태그에서 클릭 이벤트를 사용할 때 스크린 리더로도 접근할 수 있게 keydown 이벤트 핸들러를 부착해야 함.
 *
 * @param {() => void} onClick onClick에 사용될 핸들러 함수
 * @return handleKeyDown 핸들러 함수
 */
export const handleA11yClick =
  (onClick: () => void) =>
  (event: React.KeyboardEvent<HTMLElement | SVGElement>) => {
    if (event.key === "Enter" || event.key === " ") {
      event.preventDefault();
      onClick();
    }
  };
