"use client";

import clsx from "clsx";
import {
  type ForwardedRef,
  type TextareaHTMLAttributes,
  forwardRef,
} from "react";
import { textareaStyle } from "./index.css";

export interface TextareaProps
  extends TextareaHTMLAttributes<HTMLTextAreaElement> {
  isError?: boolean;
}

const Textarea = forwardRef(
  (
    { isError = false, className, ...props }: TextareaProps,
    ref: ForwardedRef<HTMLTextAreaElement>,
  ) => {
    return (
      <textarea
        ref={ref}
        className={clsx(className, textareaStyle({ isError }))}
        aria-invalid={isError}
        aria-multiline="true"
        {...props}
      />
    );
  },
);

export default Textarea;
