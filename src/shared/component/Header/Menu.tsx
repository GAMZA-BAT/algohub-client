import { useOutsideClick } from "@/common/hook/useOutsideClick";
import { camelToKebab } from "@/common/util/string";
import { buttonStyle } from "@/shared/component/Header/Menu.css";
import type React from "react";
import { useState } from "react";

type MenuProps = {
  label: string;
  renderTriggerIcon: React.ReactNode;
  renderList: React.ReactNode;
};

const Menu = ({ label, renderTriggerIcon, renderList }: MenuProps) => {
  const [showMenu, setShowMenu] = useState(false);
  const handleClick = () => setShowMenu(!showMenu);
  const handleToggle = () => setShowMenu(false);
  const ref = useOutsideClick(handleToggle);
  const id = camelToKebab(`${label}Toggle`);
  const kebabLabel = camelToKebab(label);

  return (
    <div ref={ref}>
      <button
        className={buttonStyle}
        id={id}
        aria-label={`${showMenu ? "Close" : "Open"} ${kebabLabel}`}
        aria-haspopup="true"
        aria-expanded={showMenu}
        aria-controls={kebabLabel}
        onClick={handleClick}
      >
        {renderTriggerIcon}
      </button>

      {showMenu && renderList}
    </div>
  );
};

export default Menu;
