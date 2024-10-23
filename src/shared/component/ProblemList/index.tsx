import ProblemListItem from "@/shared/component/ProblemList/Item";
import ProblemListHeader from "@/view/group/dashboard/ProblemListHeader";
import type { PropsWithChildren } from "react";

type ProblemListProps = PropsWithChildren & {
  className?: string;
};

const ProblemList = ({ className, children, ...props }: ProblemListProps) => {
  return (
    <ul className={className} {...props}>
      {children}
    </ul>
  );
};

ProblemList.Item = ProblemListItem;
ProblemList.Header = ProblemListHeader;

export default ProblemList;
