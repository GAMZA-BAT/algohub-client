import {
  emptyGuideStyle,
  emptyWrapper,
} from "@/shared/component/Empty/index.css";
import { IcnEmpty } from "../../../../public/asset/svg";

type EmptyProps = {
  guideText: string;
};
const Empty = ({ guideText }: EmptyProps) => {
  return (
    <section className={emptyWrapper}>
      <IcnEmpty width={100} height={52} />
      <p className={emptyGuideStyle}>{guideText}</p>
    </section>
  );
};

export default Empty;
