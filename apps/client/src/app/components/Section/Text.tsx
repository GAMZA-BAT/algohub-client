import type { PropsWithChildren } from "react";
import { introTextStyle } from "./index.css";

const Text = ({ children }: PropsWithChildren) => {
  return <p className={introTextStyle()}>{children}</p>;
};

Text.Em = ({ children }: PropsWithChildren) => {
  return <em className={introTextStyle({ type: "em" })}>{children}</em>;
};

Text.Alphabet = ({ children }: PropsWithChildren) => {
  return (
    <span className={introTextStyle({ type: "alphabet" })}>{children}</span>
  );
};

Text.Small = ({ children }: PropsWithChildren) => {
  return (
    <small className={introTextStyle({ type: "small" })}>{children}</small>
  );
};

export default Text;
