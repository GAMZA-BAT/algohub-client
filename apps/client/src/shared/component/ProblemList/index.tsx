import ProblemListHeader from "@/app/group/[groupId]/components/ProblemListHeader";
import ProblemListItem from "@/shared/component/ProblemList/Item";
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
