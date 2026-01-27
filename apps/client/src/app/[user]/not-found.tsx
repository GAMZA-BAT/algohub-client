import Footer from "@/app/components/Footer";
import { notFoundPageStyle } from "@/app/index.css";
import GuideSection from "@/app/not-found";
import { notFoundPaddingStyle } from "@/styles/shared.css";

const NotFound = () => {
  return (
    <main className={notFoundPageStyle}>
      <div className={notFoundPaddingStyle}>
        <GuideSection />
      </div>
      <Footer />
    </main>
  );
};

export default NotFound;
