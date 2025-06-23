import {
  columnStyle,
  headerStyle,
} from "@/view/group/my-solved/Header/index.css";
import { MYSOLVED_HEADER_CONTENT } from "@/view/group/my-solved/constant";

const Header = () => {
  return (
    <header className={headerStyle}>
      {MYSOLVED_HEADER_CONTENT.map((content) => (
        <p className={columnStyle} key={content}>
          {content}
        </p>
      ))}
    </header>
  );
};

export default Header;
