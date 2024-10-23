"use client";

import clsx from "clsx";
import { type ForwardedRef, type InputHTMLAttributes, forwardRef } from "react";
import { inputStyle } from "./index.css";

export interface InputProps
  extends Omit<InputHTMLAttributes<HTMLInputElement>, "size"> {
  size?: "medium" | "large";
  isError?: boolean;
}

const Input = forwardRef(
  (
    { size = "medium", isError = false, className, ...props }: InputProps,
    ref: ForwardedRef<HTMLInputElement>,
  ) => {
    return (
      <input
        ref={ref}
        className={clsx(inputStyle({ size, isError }), className)}
        aria-invalid={isError}
        {...props}
      />
    );
  },
);

export default Input;
