import { buttonStyle } from "@/common/component/Button/index.css";
import clsx from "clsx";
import type { ButtonHTMLAttributes } from "react";

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  size?: "small" | "medium" | "large";
  color?: "purple" | "gray" | "lg";
  isActive?: boolean;
}

const Button = ({
  children,
  className,
  size = "small",
  color = "purple",
  isActive,
  ...props
}: ButtonProps) => {
  return (
    <button
      className={clsx(
        buttonStyle({
          size,
          color,
          isActive,
        }),
        className,
      )}
      {...props}
    >
      {children}
    </button>
  );
};

export default Button;
