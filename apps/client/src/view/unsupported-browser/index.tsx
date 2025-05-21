import {
  IcnBtnArrowRight,
  IcnChrome,
  IcnEdge,
  IcnFirefox,
  IcnImgLogoError,
  IcnSafari,
} from "@/asset/svg";
import Button from "@/common/component/Button";
import Footer from "@/view/onboarding/Footer";
import {
  bottomContainerStyle,
  browserItemStyle,
  h1Style,
  h2Style,
  iconWrapperStyle,
  inquireBtnStyle,
  mainSectionStyle,
  mainTextStyle,
  pageStyle,
  subSectionStyle,
  textSectionStyle,
  updateSectionBottomStyle,
  updateTextStyle,
} from "@/view/unsupported-browser/index.css";

const UnSupportedBrowser = () => {
  const handleInquire = () => {
    window.location.href = "mailto:algohub0808@gmail.com";
  };

  return (
    <main>
      <div className={pageStyle}>
        <section className={mainSectionStyle}>
          <div className={textSectionStyle}>
            <h1 className={h1Style}>지원이 되지 않는 브라우저에요.</h1>
            <p className={mainTextStyle}>
              문제가 지속적으로 발생한다면 문의하기를 이용해주세요. <br />
              편하게 문의해주시면 알고허브가 방법을 찾겠습니다.
            </p>

            <div style={{ width: "24rem" }}>
              <Button
                onClick={handleInquire}
                className={inquireBtnStyle}
                size="medium"
                color="lg"
              >
                문의하기
              </Button>
            </div>
          </div>
          <IcnImgLogoError
            style={{ marginRight: "4.6rem" }}
            width={137}
            height={164}
          />
        </section>
        <div className={bottomContainerStyle}>
          <section className={subSectionStyle}>
            <h2 className={h2Style}>지원하지 않는 브라우저 목록이에요.</h2>
            <ol>
              <li className={browserItemStyle}>1. 서비스가 종료된 브라우저</li>
              <li className={browserItemStyle}>
                2. 크롬 105 미만 버전, 사파리 16.0 미만 버전, Edge 105 미만
                버전, Firefox 110 미만 버전
              </li>
              <li className={browserItemStyle}>
                3. 전 세계 0.3% 미만의 점유율에 속한 브라우저
              </li>
            </ol>
          </section>
          <section className={subSectionStyle}>
            <h2 className={h2Style}>지원하는 브라우저를 확인해주세요.</h2>

            <div className={updateSectionBottomStyle}>
              <p className={updateTextStyle}>
                브라우저 업데이트 하기
                <IcnBtnArrowRight width={24} height={24} />
              </p>
              <div style={{ display: "flex", gap: "1.4rem" }}>
                <a
                  href="https://www.google.com/chrome/update"
                  target="_blank"
                  className={iconWrapperStyle}
                  rel="noreferrer"
                >
                  <IcnChrome width={28} height={28} />
                </a>
                <a
                  href="https://support.apple.com/en-us/102665"
                  target="_blank"
                  className={iconWrapperStyle}
                  rel="noreferrer"
                >
                  <IcnSafari width={28} height={28} />
                </a>
                <a
                  href="https://support.microsoft.com/en-au/topic/microsoft-edge-update-settings-af8aaca2-1b69-4870-94fe-18822dbb7ef1"
                  target="_blank"
                  className={iconWrapperStyle}
                  rel="noreferrer"
                >
                  <IcnEdge width={28} height={28} />
                </a>
                <a
                  href="https://support.mozilla.org/en-US/kb/update-firefox-latest-release"
                  target="_blank"
                  className={iconWrapperStyle}
                  rel="noreferrer"
                >
                  <IcnFirefox width={28} height={28} />
                </a>
              </div>
            </div>
          </section>
        </div>
      </div>
      <Footer />
    </main>
  );
};

export default UnSupportedBrowser;
