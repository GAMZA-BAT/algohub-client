import IcnEmpty from "@/asset/svg/icn_empty.svg";
import { emptyGuideStyle, emptyWrapper } from "./index.css";

const SearchEmpty = () => {
  return (
    <div className={emptyWrapper}>
      <IcnEmpty width={98} height={51.7} />
      <p className={emptyGuideStyle}>검색 결과가 없습니다.</p>
    </div>
  );
};

export default SearchEmpty;
