import spinner from "@/asset/lottie/spinner.json";
import Animation from "../Animation";

interface SpinnerProps {
  size?: "large" | "medium" | "small";
}

const sizeMap = {
  large: "12rem",
  medium: "8rem",
  small: "6rem",
};
const Spinner = ({ size = "medium" }: SpinnerProps) => {
  return <Animation animationJson={spinner} size={sizeMap[size]} />;
};

export default Spinner;
