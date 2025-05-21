import clsx from "clsx";
import { type ComponentProps, forwardRef } from "react";
import { errorLabelStyle } from "./index.css";

const FormLabel = forwardRef<
  HTMLLabelElement,
  ComponentProps<"label"> & { isError?: boolean }
>(({ className, isError, ...props }, ref) => {
  return (
    <label
      ref={ref}
      className={clsx(className, isError && errorLabelStyle)}
      {...props}
    />
  );
});

export default FormLabel;
