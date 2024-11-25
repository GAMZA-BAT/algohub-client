import ProblemList from "@/shared/component/ProblemList";

const ProblemInfo = () => {
  return (
    <ProblemList>
      <ProblemList.Header />
      <ProblemList.Item
        problemId={1}
        title="트리에서의 동적 계획법"
        endDate="2024-01-02"
        level={2}
        solved={true}
        memberCount={200}
        accuracy={20}
        submitMemberCount={20}
        link=""
      />
    </ProblemList>
  );
};

export default ProblemInfo;
