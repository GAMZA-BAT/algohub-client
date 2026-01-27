import { buttonStyle } from "@/common/component/ToggleButton/index.css";
import type { ComponentPropsWithoutRef } from "react";

interface ToggleButtonProps extends ComponentPropsWithoutRef<"input"> {
  isSelected: boolean;
  onChange: () => void;
}

const ToggleButton = ({
  isSelected,
  onChange,
  ...props
}: ToggleButtonProps) => {
  return (
    <input
      type="checkbox"
      role="switch"
      aria-checked={isSelected}
      checked={isSelected}
      onChange={onChange}
      className={buttonStyle({ active: isSelected })}
      {...props}
    />
  );
};

export default ToggleButton;
