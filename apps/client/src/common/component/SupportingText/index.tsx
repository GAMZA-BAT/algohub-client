import { IcnError } from "@/asset/svg";
import clsx from "clsx";
import type { ComponentProps } from "react";
import { errorIconStyle, errorWrapper, msgStyle } from "./Index.css";

export interface SupportingTextProps extends ComponentProps<"p"> {
  isError?: boolean;
  hasErrorIcon?: boolean;
  message?: string;
}

const SupportingText = ({
  isError,
  hasErrorIcon,
  message,
  className,
  ...props
}: SupportingTextProps) => {
  return (
    <div className={errorWrapper}>
      {hasErrorIcon && <IcnError className={errorIconStyle} />}
      {message && (
        <p {...props} className={clsx(msgStyle({ isError }), className)}>
          {message}
        </p>
      )}
    </div>
  );
};

export default SupportingText;
