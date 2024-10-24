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

export const loadTheme = (theme: string) => {
  const existingLink = document.getElementById("dynamic-theme");

  if (existingLink) {
    existingLink.remove(); // 기존 테마 삭제
  }

  const link = document.createElement("link");
  link.id = "dynamic-theme";
  link.rel = "stylesheet";
  link.href = `/themes/prism-${theme}.min.css`; // 테마 경로 설정
  document.head.appendChild(link); // 새로운 테마 추가
};
