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
 * const NotificationListItem = () => {
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
  const onFocus = (event: FocusEvent<HTMLElement | SVGElement>) => {
    if (!event.currentTarget.contains(event.relatedTarget)) {
      setIsActive(true);
    }
  };
  const onBlur = (event: FocusEvent<HTMLElement | SVGElement>) => {
    if (!event.currentTarget.contains(event.relatedTarget)) {
      setIsActive(false);
    }
  };

  const onMouseOver = () => {
    setIsActive(true);
  };
  const onMouseLeave = () => {
    setIsActive(false);
  };

  return { isActive, onFocus, onBlur, onMouseOver, onMouseLeave };
};

export default useA11yHoverHandler;
