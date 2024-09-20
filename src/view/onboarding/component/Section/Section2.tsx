import Image from "next/image";
import Text from "./Text";
import {
  contentsContainer,
  imageContainer,
  imageStyle,
  introContainer,
  introTextContainer,
  sectionStyle,
} from "./index.css";
import group from "/public/assets/group.png";

const feature1 = { section: "feature1" } as const;
const Section2 = () => {
  return (
    <section id="feature-1" className={sectionStyle}>
      <div className={contentsContainer(feature1)}>
        <div className={introContainer}>
          <h2 className={introTextContainer()}>
            <Text>
              <Text.Em>백준</Text.Em>에서 문제를 제출하고
            </Text>
            <Text>
              <Text.Alphabet>Chrome extension</Text.Alphabet> 을 설치해
            </Text>
          </h2>
        </div>
        <div className={imageContainer.intro} aria-hidden="true">
          <Image
            className={imageStyle(feature1)}
            src={group}
            alt="그룹 페이지 예시 이미지"
            unoptimized
          />
        </div>
      </div>
    </section>
  );
};

export default Section2;
