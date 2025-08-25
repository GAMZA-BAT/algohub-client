"use client";
import spinner from "@/asset/lottie/spinner.json";
import type { HTMLAttributes } from "react";
import Animation from "../Animation";

interface SpinnerProps extends HTMLAttributes<HTMLDivElement> {
  size?: "large" | "medium" | "small";
}

const sizeMap = {
  large: "12rem",
  medium: "8rem",
  small: "6rem",
};
const Spinner = ({ size = "medium", ...props }: SpinnerProps) => {
  return <Animation {...props} animationJson={spinner} size={sizeMap[size]} />;
};

export default Spinner;
