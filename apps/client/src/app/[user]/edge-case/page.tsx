"use client";

import EdgeCaseController from "@/app/[user]/edge-case/components/EdgeCaseController";
import EdgeCaseList from "@/app/[user]/edge-case/components/EdgeCaseList";
import { edgeCaseWrapper } from "@/app/[user]/edge-case/components/index.css";
import WrongSolvedList from "@/app/[user]/edge-case/components/WrongSolvedList";
import { useEdgeCaseListQueryObject } from "@/app/api/edge-case/query";
import Sidebar from "@/common/component/Sidebar";
import { sidebarWrapper } from "@/styles/shared.css";
import { useQuery } from "@tanstack/react-query";
import { useState } from "react";

const EdgeCasePage = () => {
  const [problemNumber, setProblemNumber] = useState<number | null>(null);
  const { data: edgeCaseList } = useQuery(
    useEdgeCaseListQueryObject(problemNumber ?? undefined),
  );

  return (
    <main className={sidebarWrapper}>
      <Sidebar>
        <WrongSolvedList />
      </Sidebar>
      <div className={edgeCaseWrapper}>
        <EdgeCaseController setProblemNumber={setProblemNumber} />
        {!!edgeCaseList &&
          edgeCaseList?.map((edgeCase) => (
            <EdgeCaseList key={edgeCase.edgeCaseId} {...edgeCase} />
          ))}
      </div>
    </main>
  );
};

export default EdgeCasePage;
