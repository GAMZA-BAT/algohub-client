import {
  dropdownContainer,
  dropdownItemStyle,
} from "@/common/component/Dropdown/index.css";
import clsx from "clsx";
import {
  Children,
  type ComponentProps,
  type ReactElement,
  type ReactNode,
  cloneElement,
  isValidElement,
} from "react";

export interface DropdownProps extends ComponentProps<"ul"> {
  /**
   * **ul에 적용되는 기본값** : `dropdownContainer`<br>
   * **li에 적용되는 기본값** : `dropdownItemStyle`<br><hr>
   */
  className?: string;
  /** `<li></li>`들을 사용해주세요<br>
   * **`<li>`에 부여되는 속성**: `className`, `key`, `role`, `tabIndex`<br><hr>
   */
  children?: ReactNode;
}

const Dropdown = ({ children, className, ...props }: DropdownProps) => {
  return (
    <ul {...props} className={clsx(dropdownContainer, className)}>
      {Children.map(children, (child, index) => {
        if (isValidElement(child)) {
          return cloneElement<HTMLLIElement>(
            child as ReactElement<HTMLLIElement>,
            {
              className: clsx(child.props.className, dropdownItemStyle),
              key: index, // TODO: 실제 데이터로 확인 후 적절한 key 탐색
              role: "button",
              tabIndex: 0,
            },
          );
        }
        return child;
      })}
    </ul>
  );
};

export default Dropdown;
