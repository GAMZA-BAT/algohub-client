import { PVTracker } from "@/common/component/PVTracker";

export default function GroupProblemDetailLayout({
  children,
  params,
}: {
  children: React.ReactNode;
  params: { groupId: string; id: string };
}) {
  return (
    <>
      <PVTracker
        name="group_problem_detail_page_view"
        params={{ group_id: params.groupId, problem_id: params.id }}
      />
      {children}
    </>
  );
}
