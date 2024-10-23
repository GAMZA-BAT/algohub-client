"use client";

import { useFadeIn } from "@/shared/hook/useIntersectionObserver";
import type { HTMLAttributes, PropsWithChildren } from "react";
import { fadeInStyle } from "./index.css";

interface ImageProps
  extends PropsWithChildren,
    HTMLAttributes<HTMLDivElement> {}

const FadeInImage = ({ children, ...props }: ImageProps) => {
  const imageRef = useFadeIn<HTMLDivElement>(function (
    this: IntersectionObserver,
    [e],
  ) {
    if (e.isIntersecting) {
      e.target.classList.add(fadeInStyle);
      this.disconnect();
    }
  } as IntersectionObserverCallback);

  return (
    <div ref={imageRef} {...props}>
      {children}
    </div>
  );
};

export default FadeInImage;
