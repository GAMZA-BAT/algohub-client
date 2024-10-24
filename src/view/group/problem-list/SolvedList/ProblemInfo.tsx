import ProblemList from "@/shared/component/ProblemList";

const ProblemInfo = () => {
  return (
    <ProblemList>
      <ProblemList.Header />
      <ProblemList.Item
        problemId={1}
        title="트리에서의 동적 계획법"
        startDate="2024-01-01"
        endDate="2024-01-02"
        level="bronze 1"
        solved={true}
        memberCount={200}
      />
    </ProblemList>
  );
};

export default ProblemInfo;
