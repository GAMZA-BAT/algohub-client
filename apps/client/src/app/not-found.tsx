import { notFoundPaddingStyle } from "@/styles/shared.css";
import GuideSection from "@/view/not-found";
import { pageStyle } from "@/view/not-found/index.css";
import Footer from "@/view/onboarding/Footer";

const NotFound = () => {
  return (
    <main className={pageStyle}>
      <div className={notFoundPaddingStyle}>
        <GuideSection />
      </div>
      <Footer />
    </main>
  );
};

export default NotFound;
