"use client";
import { IcnBtnArrowDown } from "@/asset/svg";
import {
  icnStyle,
  optionStyle,
  optionWrapper,
  selectStyle,
  textStyle,
} from "@/common/component/SelectBox/index.css";
import { useOutsideClick } from "@/common/hook/useOutsideClick";
import { handleA11yClick } from "@/common/util/dom";
import clsx from "clsx";
import { type HTMLAttributes, useState } from "react";

interface SelectBoxProps
  extends Omit<HTMLAttributes<HTMLButtonElement>, "onChange"> {
  label: string;
  options: readonly string[];
  className?: string;
  align?: "left" | "right" | "center";
  value: string;
  onChange: (value: string) => void;
}
const SelectBox = ({
  label,
  options,
  className,
  align = "center",
  value,
  onChange,
  ...props
}: SelectBoxProps) => {
  const [clicked, setClicked] = useState(false);

  const handleClick = () => setClicked((prev) => !prev);
  const handleClose = () => setClicked(false);
  const ref = useOutsideClick<HTMLButtonElement>(handleClose);
  return (
    <button
      className={clsx(selectStyle, className)}
      onClick={handleClick}
      onKeyDown={handleA11yClick(handleClick)}
      ref={ref}
      {...props}
    >
      <p className={textStyle({ isActive: !!value })}>{value || label}</p>
      <IcnBtnArrowDown
        width={20}
        height={20}
        className={clicked ? icnStyle : "none"}
      />
      <ul
        aria-label={`${label} 선택하기`}
        // biome-ignore lint/a11y/noNoninteractiveElementToInteractiveRole: <explanation>
        role="listbox"
        aria-expanded={clicked}
        className={optionWrapper({ isActive: clicked, align })}
      >
        {options.map((option, idx) => (
          <li
            // biome-ignore lint/a11y/noNoninteractiveElementToInteractiveRole: <explanation>
            role="option"
            aria-selected={value === option}
            className={optionStyle}
            onClick={() => onChange(option)}
            onKeyDown={handleA11yClick(() => onChange(option))}
            key={idx}
            tabIndex={0}
          >
            <p className={textStyle({ isActive: option !== label })}>
              {option}
            </p>
          </li>
        ))}
      </ul>
    </button>
  );
};

export default SelectBox;
