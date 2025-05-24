"use client";

import { useOutsideClick } from "@/common/hook/useOutsideClick";
import { handleA11yClick } from "@/common/util/dom";
import { camelToKebab } from "@/common/util/string";
import { Slot } from "@radix-ui/react-slot";
import {
  type ReactNode,
  forwardRef,
  useImperativeHandle,
  useState,
} from "react";
import { defaultButtonStyle } from "./Menu.css";

type MenuProps = {
  /** 두 render 컴포넌트의 `id`, `aria-label`, `aria-labelledby`속성에 사용될 string <br><hr> */
  label: string;
  /** trigger button 컴포넌트<br>
   * **부여되는 속성**: `className`, `id`, `aria-label`, `aria-haspopup`, `aria-expanded`, `aria-controls`, `onClick`, `onKeyDown`<br><hr>
   */
  renderTriggerButton: ReactNode;
  /** `<Dropdown />`으로 만들어진 리스트 컴포넌트<br>
   * **부여되는 속성**: `id`, `aria-labelledby`<br><hr>
   */
  renderList: ReactNode;

  onClick?: () => void;
};

export type MenuRef = {
  toggleMenu: () => void;
  menuRef: React.RefObject<HTMLElement>;
};
/**
 * trigger button과 list에 토글 기능과 필요한 aria속성을 부여해주는 컴포넌트<br>
 * **`renderTriggerButton`은 꼭 clsx를 사용해 className을 결합해야 함**
 */

const Menu = forwardRef(
  ({ label, renderTriggerButton, renderList, onClick }: MenuProps, ref) => {
    const [showMenu, setShowMenu] = useState(false);
    const handleClick = () => setShowMenu(!showMenu);
    const handleClose = () => setShowMenu(false);
    const outsideClickRef = useOutsideClick(handleClose);
    const triggerId = camelToKebab(`${label}Toggle`);
    const menuId = camelToKebab(label);

    useImperativeHandle(
      ref,
      () =>
        ({
          toggleMenu: handleClick,
          menuRef: outsideClickRef,
        }) as MenuRef,
    );

    return (
      <div ref={outsideClickRef}>
        <Slot
          className={defaultButtonStyle}
          id={triggerId}
          aria-label={`${showMenu ? "Close" : "Open"} ${menuId}`}
          aria-haspopup="true"
          aria-expanded={showMenu}
          aria-controls={menuId}
          onClick={onClick || handleClick}
          onKeyDown={handleA11yClick(handleClick)}
          tabIndex={0}
        >
          {renderTriggerButton}
        </Slot>

        {showMenu && (
          <Slot
            id={menuId}
            aria-labelledby={triggerId}
            onClick={handleClose}
            onKeyDown={handleA11yClick(handleClose)}
          >
            {renderList}
          </Slot>
        )}
      </div>
    );
  },
);

export default Menu;
