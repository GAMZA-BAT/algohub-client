import CodeHighlighter from "./CodeHighlighter";
import { cpp } from "./example";
import { sectionWrapper } from "./index.css";

const CodeSection = () => {
  return (
    <section className={sectionWrapper}>
      <CodeHighlighter code={cpp} language="C++" />
    </section>
  );
};

export default CodeSection;
