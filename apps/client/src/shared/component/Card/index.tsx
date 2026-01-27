import clsx from "clsx";
import type { ComponentProps } from "react";
import { cardStyle } from "./index.css";

type CardProps = ComponentProps<"div">;

const Card = ({ className, children, ...props }: CardProps) => {
  return (
    <div className={clsx(cardStyle, className)} {...props}>
      {children}
    </div>
  );
};

export default Card;
