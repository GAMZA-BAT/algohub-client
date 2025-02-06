import { IcnEmpty } from "@/asset/svg";
import {
  emptyGuideStyle,
  emptyWrapper,
} from "@/shared/component/Empty/index.css";
import clsx from "clsx";
import type { HTMLAttributes } from "react";

type EmptyProps = HTMLAttributes<HTMLDivElement>;

const Empty = ({ children, className, ...props }: EmptyProps) => {
  return (
    <section className={clsx(emptyWrapper, className)} {...props}>
      <IcnEmpty width={100} height={52} />
      <p className={emptyGuideStyle}>{children}</p>
    </section>
  );
};

export default Empty;
