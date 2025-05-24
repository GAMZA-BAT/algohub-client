import GuideSection from "@/view/not-found";
import { pageStyle } from "@/view/not-found/index.css";
import Footer from "@/view/onboarding/Footer";

const NotFound = () => {
  return (
    <main className={pageStyle}>
      <div style={{ padding: "13.7rem 12.5rem" }}>
        <GuideSection />
      </div>
      <Footer />
    </main>
  );
};

export default NotFound;
