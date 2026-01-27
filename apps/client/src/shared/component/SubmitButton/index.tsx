import Button from "@/common/component/Button";
import type { ComponentProps } from "react";
import { buttonStyle } from "./index.css";

const SubmitButton = ({ ...props }: ComponentProps<typeof Button>) => {
  return (
    <Button
      className={buttonStyle}
      type="submit"
      size="medium"
      color="purple"
      {...props}
    />
  );
};

export default SubmitButton;
