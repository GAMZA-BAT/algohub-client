"use client";

import clsx from "clsx";
import { type ForwardedRef, type InputHTMLAttributes, forwardRef } from "react";
import { inputStyle, inputWrapper } from "./index.css";

export interface InputProps
  extends Omit<InputHTMLAttributes<HTMLInputElement>, "size"> {
  size?: "medium" | "large";
  isError?: boolean;
  leftContent?: React.ReactNode;
  rightContent?: React.ReactNode;
}

const Input = forwardRef(
  (
    { size = "medium", isError = false, className, leftContent, rightContent, ...props }: InputProps,
    ref: ForwardedRef<HTMLInputElement>,
  ) => {
    return (
      <div className={inputWrapper({ size, isError, disabled: props.disabled })}>
        {leftContent}
        <input
          ref={ref}
          className={clsx(inputStyle({ size }), className)}
          aria-invalid={isError}
          {...props}
        />
        {rightContent}
      </div>
    );
  },
);

export default Input;
