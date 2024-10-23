"use client";

import { arrow } from "@/asset/lottie";
import Animation from "@/common/component/Animation";
import Button from "@/common/component/Button";
import { handleA11yClick } from "@/common/util/dom";
import clsx from "clsx";
import Image from "next/image";
import { useRouter } from "next/navigation";
import Text from "./Text";
import {
  arrowContainer,
  arrowStyle,
  buttonTextStyle,
  contentsContainer,
  imageStyle,
  introButtonContainer,
  introButtonStyle,
  introContainer,
  introTextContainer,
  sectionStyle,
} from "./index.css";

const intro = { section: "intro" } as const;
const Section1 = () => {
  const router = useRouter();
  const handleClick = () => {
    const featureSection = document.querySelector("#feature-1");
    featureSection?.scrollIntoView({
      behavior: "smooth",
    });
  };
  const handleLoginClick = () => {
    router.push("/login", { scroll: false });
  };
  const handleSignupClick = () => {
    router.push("/signup", { scroll: false });
  };
  return (
    <section
      id="introduction"
      className={sectionStyle}
      aria-labelledby="introduction-heading"
    >
      <div className={contentsContainer(intro)}>
        <div className={introContainer}>
          <h1 id="introduction-heading" className={introTextContainer()}>
            <Text>함께 도전하고 함께 성장하는</Text>
            <Text.Em>알고리즘 스터디 플랫폼</Text.Em>
          </h1>
          <div className={introButtonContainer}>
            <Button
              size="medium"
              color="lg"
              aria-label="로그인 페이지로 이동"
              className={clsx(introButtonStyle, buttonTextStyle)}
              onClick={handleLoginClick}
            >
              로그인
            </Button>
            <Button
              size="medium"
              color="purple"
              aria-label="회원가입 페이지로 이동"
              className={clsx(introButtonStyle, buttonTextStyle)}
              onClick={handleSignupClick}
            >
              회원가입 하기
            </Button>
          </div>
        </div>
        <Image
          className={imageStyle(intro)}
          width={584}
          height={541}
          src="/assets/pixel3.webp"
          alt="장식용 이미지"
          unoptimized
          priority
        />
      </div>
      <div className={arrowContainer}>
        <Animation
          className={arrowStyle}
          role="button"
          onClick={handleClick}
          onKeyDown={handleA11yClick(handleClick)}
          tabIndex={0}
          aria-label="다음 섹션으로 이동"
          size="10.8rem"
          animationJson={arrow}
        />
      </div>
    </section>
  );
};

export default Section1;
