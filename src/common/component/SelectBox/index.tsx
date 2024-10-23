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
  extends Omit<HTMLAttributes<HTMLDivElement>, "onChange"> {
  label: string;
  options: readonly string[];
  selectCustomStyle?: string;
  align?: "left" | "right" | "center";
  value: string;
  onChange: (value: string) => void;
}
const SelectBox = ({
  label,
  options,
  selectCustomStyle,
  align = "center",
  value,
  onChange,
  ...props
}: SelectBoxProps) => {
  const [clicked, setClicked] = useState(false);

  const handleClick = () => setClicked((prev) => !prev);
  const handleClose = () => setClicked(false);
  const ref = useOutsideClick(handleClose);
  return (
    <div
      className={clsx(selectStyle, selectCustomStyle)}
      onClick={handleClick}
      onKeyDown={handleA11yClick(handleClick)}
      aria-label={`${label} 선택하기`}
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
          >
            <p className={textStyle({ isActive: option === label })}>
              {option}
            </p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default SelectBox;
