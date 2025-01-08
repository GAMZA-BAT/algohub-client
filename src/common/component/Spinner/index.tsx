import { spinnerStyle } from "@/common/component/Spinner/index.css";
import spinner from "@assets/lottie/spinner.json";
import Lottie from "lottie-react";

interface SpinnerProps {
  size?: "large" | "medium" | "small";
}

const Spinner = ({ size = "medium" }: SpinnerProps) => {
  return <Lottie animationData={spinner} className={spinnerStyle({ size })} />;
};

export default Spinner;
