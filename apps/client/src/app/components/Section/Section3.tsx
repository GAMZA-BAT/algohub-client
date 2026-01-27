"use client";

import Image from "next/image";
import FadeInImage from "./FadeInImage";
import Text from "./Text";
import {
  contentsContainer,
  gradientStyle,
  imageContainer,
  imageStyle,
  introContainer,
  introTextContainer,
  sectionStyle,
} from "./index.css";

const feature2 = { section: "feature2" } as const;
const Section3 = () => {
  return (
    <section id="feature-2" className={sectionStyle}>
      <div className={contentsContainer(feature2)}>
        <div className={introContainer}>
          <h2 className={introTextContainer(feature2)}>
            <Text>
              풀이를 <Text.Em>자동으로 등록</Text.Em>해보세요.
            </Text>
            <div>
              <Text.Small>
                스터디 그룹에 참가하여 마감 기한안에 문제를
              </Text.Small>
              <Text.Small>풀며 실력을 쌓을 수 있어요.</Text.Small>
            </div>
          </h2>
        </div>
        <FadeInImage className={imageContainer.feature2} aria-hidden="true">
          <Image
            className={imageStyle(feature2)}
            width={856}
            height={480}
            src="/assets/comment.gif"
            alt="댓글 페이지 예시 이미지"
            unoptimized
          />
          <div className={gradientStyle} />
        </FadeInImage>
      </div>
    </section>
  );
};

export default Section3;
