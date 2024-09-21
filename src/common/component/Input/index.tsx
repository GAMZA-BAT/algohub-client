"use client";

import { IcnError } from "@/asset/svg";
import type { ChangeEvent, InputHTMLAttributes, KeyboardEvent } from "react";
import {
  barStyle,
  containerStyle,
  errorIconStyle,
  errorMsgStyle,
  errorWrapper,
  inputStyle,
  wrapperStyle,
} from "./index.css";

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  type: "medium" | "large";
  handleChange: (value: string) => void;
  label?: string;
  isError?: boolean;
  errorMsg?: string;
  errorPosition?: "top" | "bottom";
}

const Input = ({
  type,
  handleChange,
  label,
  isError,
  errorMsg,
  errorPosition = "bottom",
  ...props
}: InputProps) => {
  const onChange = (event: ChangeEvent<HTMLInputElement>) => {
    handleChange(event.target.value);
  };

  return (
    <div className={containerStyle({ errorPosition })}>
      <div className={wrapperStyle({ type, isError })}>
        <div className={barStyle({ type })} />
        <input
          className={inputStyle({ type })}
          onChange={onChange}
          aria-invalid={isError}
          aria-label={label}
          aria-errormessage={errorMsg}
          {...props}
        />
      </div>
      <div className={errorWrapper}>
        {isError && (
          <>
            <IcnError className={errorIconStyle} />
            <div className={errorMsgStyle}>{errorMsg}</div>
          </>
        )}
      </div>
    </div>
  );
};

export default Input;
