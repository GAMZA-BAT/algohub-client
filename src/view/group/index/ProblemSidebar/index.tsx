import Button from "@/common/component/Button";
import { problemSidebarWrapper } from "@/view/group/index/ProblemSidebar/index.css";

const ProblemSidebar = () => {
  return (
    <div className={problemSidebarWrapper}>
      <Button size="medium">문제 추가하기</Button>
    </div>
  );
};

export default ProblemSidebar;
