import CodeHighlighter from "./CodeHighlighter/CodeHighlighter";
import { java } from "./example";
import { sectionWrapper } from "./index.css";

const CodeSection = () => {
  return (
    <section className={sectionWrapper}>
      <CodeHighlighter code={java} language="Java" />
    </section>
  );
};

export default CodeSection;
