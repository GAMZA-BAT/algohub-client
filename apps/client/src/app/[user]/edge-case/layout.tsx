import { PVTracker } from "@/common/component/PVTracker";

export default function UserEdgeCaseLayout({
  children,
  params,
}: {
  children: React.ReactNode;
  params: { user: string };
}) {
  return (
    <div>
      <PVTracker
        name="user_edge_case_page_view"
        params={{ user_id: params.user }}
      />
      {children}
    </div>
  );
}
