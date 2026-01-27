import { useTabState } from "@/common/component/Tab/TabProvider";
import { indicatorStyle } from "@/common/component/Tab/index.css";
import { motion } from "framer-motion";

type IndicatorId = {
  id?: string;
};

const Indicator = ({ id }: IndicatorId) => {
  const { variant } = useTabState();

  return (
    <motion.div
      layoutId={`${id && `${id}-`}tab-indicator`}
      className={indicatorStyle({ variant: variant })}
    />
  );
};

export default Indicator;
