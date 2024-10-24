"use client";
import { type FocusEvent, useState } from "react";

/**
 * @description
 * 스크린 리더를 위해 mouseover, mouseout 이벤트 핸들러가 있으면 focus, blur도 등록해야 함.
 * 
 * 이 hook은 active와 위 4가지 핸들러를 제공함.
 * @returns isActive, handlers
 ** isActive: 외부 버튼 용 state
 ** handlers: mouseover, mouseout, focus, blur 핸들러
 * @example
 * const AlarmListItem = () => {
  * const {isActive, handleMouseOver, handleMouseOut, handleFocus, handleBlur} = useA11yHoverHandler();

    return (
      <li
        onFocus={handleFocus}
        onBlur={handleBlur}
        onMouseOver={handleMouseOver}
        onMouseOut={handleMouseOut}
      >
        ...
        <IcnBtnDeleteCircle
          role="button"
          className={deleteIconStyle({ active: isActive })}
        />
      ...
 */
const useA11yHoverHandler = () => {
  const [isActive, setIsActive] = useState(false);
  const handleFocus = (event: FocusEvent<HTMLElement | SVGElement>) => {
    if (!event.currentTarget.contains(event.relatedTarget)) {
      setIsActive(true);
    }
  };
  const handleBlur = (event: FocusEvent<HTMLElement | SVGElement>) => {
    if (!event.currentTarget.contains(event.relatedTarget)) {
      setIsActive(false);
    }
  };

  const handleMouseOver = () => {
    setIsActive(true);
  };
  const handleMouseOut = () => {
    setIsActive(false);
  };

  return { isActive, handleFocus, handleBlur, handleMouseOver, handleMouseOut };
};

export default useA11yHoverHandler;
