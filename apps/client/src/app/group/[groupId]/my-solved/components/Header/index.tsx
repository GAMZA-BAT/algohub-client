import {
  columnStyle,
  headerStyle,
} from "@/app/group/[groupId]/my-solved/components/Header/index.css";
import { MYSOLVED_HEADER_CONTENT } from "@/app/group/[groupId]/my-solved/components/constant";

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
