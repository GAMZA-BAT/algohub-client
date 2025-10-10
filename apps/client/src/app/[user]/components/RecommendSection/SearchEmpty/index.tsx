import imgEmpty from "@/asset/img/img_empty.png";
import Image from "next/image";
import { emptyGuideStyle, emptyWrapper } from "./index.css";

const SearchEmpty = () => {
  return (
    <div className={emptyWrapper}>
      <Image
        src={imgEmpty}
        alt="검색 결과가 없을 때 이미지"
        width={369}
        height={192}
      />
      <p className={emptyGuideStyle}>검색 결과가 없습니다.</p>
    </div>
  );
};

export default SearchEmpty;
