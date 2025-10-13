"use client";

import EdgeCaseController from "@/app/[user]/edge-case/components/EdgeCaseController";
import EdgeCaseList from "@/app/[user]/edge-case/components/EdgeCaseList";
import { edgeCaseWrapper } from "@/app/[user]/edge-case/components/index.css";
import { useEdgeCaseListQueryObject } from "@/app/api/edge-case/query";
import { useQuery } from "@tanstack/react-query";
import { useState } from "react";

const EdgeCaseContent = () => {
  const [problemNumber, setProblemNumber] = useState<number | null>(null);
  const { data: edgeCaseList } = useQuery(
    useEdgeCaseListQueryObject(problemNumber ?? undefined),
  );

  return (
    <div className={edgeCaseWrapper}>
      <EdgeCaseController setProblemNumber={setProblemNumber} />
      {!!edgeCaseList &&
        edgeCaseList?.map((edgeCase) => (
          <EdgeCaseList key={edgeCase.edgeCaseId} {...edgeCase} />
        ))}
    </div>
  );
};

export default EdgeCaseContent;
