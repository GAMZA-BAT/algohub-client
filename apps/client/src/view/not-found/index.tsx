"use client";

import { IcnImgLogoError } from "@/asset/svg";
import {
  backBtnStyle,
  headingStyle,
  sectionStyle,
  textStyle,
  textWrapperStyle,
} from "@/view/not-found/index.css";
import { useRouter } from "next/navigation";

const GuideSection = () => {
  const router = useRouter();

  return (
    <section className={sectionStyle}>
      <div className={textWrapperStyle}>
        <h1 className={headingStyle}>페이지를 찾을 수 없습니다.</h1>

        <p className={textStyle}>
          요청하신 페이지를 찾을 수 없어요. 다시 확인해주세요. <br />
          주소가 변경되었거나 삭제되었을 수 있어요.
        </p>

        <button className={backBtnStyle} onClick={() => router.back()}>
          이전 페이지로 돌아가기
        </button>
      </div>
      <IcnImgLogoError width={137} height={164} />
    </section>
  );
};

export default GuideSection;
