"use client";
import Lottie from "lottie-react";
import type { HTMLAttributes } from "react";

interface LottiePlayerProps extends HTMLAttributes<HTMLDivElement> {
  size: string;
  animationJson: unknown;
  loop?: boolean;
}

/**
 * @param {string} size style={{ width: size, height: size }}
 * @param {boolean} loop default true
 */
const Animation = ({
  size,
  animationJson,
  loop = true,
  ...props
}: LottiePlayerProps) => {
  return (
    <Lottie
      autoplay
      loop={loop}
      style={{ width: size, height: size }}
      animationData={animationJson}
      {...props}
    />
  );
};

export default Animation;
