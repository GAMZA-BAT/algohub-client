import { countTextStyle, countWrapper } from "./index.css";

type CountChipProps = {
  count: number;
};

const CountChip = ({ count }: CountChipProps) => {
  return (
    <div className={countWrapper}>
      <span className={countTextStyle}>{count}</span>
    </div>
  );
};

export default CountChip;
