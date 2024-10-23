import { useTabState } from "@/common/component/Tab/TabProvider";
import { indicatorStyle } from "@/common/component/Tab/index.css";
import { motion } from "framer-motion";

const Indicator = () => {
  const { variant } = useTabState();

  return (
    <motion.div
      layoutId="tab-indicator"
      className={indicatorStyle({ variant: variant })}
    />
  );
};

export default Indicator;
